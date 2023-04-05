import { ChatRoom, joinUser, leaveUser } from "../../entities/ChatRoom"
import { User } from "../../entities/User"
import { ChatRoomFactory, ChatRoomParams } from "../../entities/factories/ChatRoomFactory"
import { authRepository } from "../../repositories/auth/AuthRepositoryImpl"
import { chatRoomRepository } from "../../repositories/chatRoom/ChatRoomRepositoryImpl"
import { userRepository } from "../../repositories/user/UserRepositoryImpl"
import { myRoomRepository } from "../../repositories/user/myRoom/MyRoomRepositoryImpl"
import { ChatRoomsService } from "./ChatRoomsService"

class ChatRoomsServiceImpl implements ChatRoomsService {
  private readonly NOT_FOUND_ERROR = "Room not found"
  private readonly LOGIN_ERROR = "login required"

  public save = async (params: ChatRoomParams): Promise<void> => {
    const chatRoom = ChatRoomFactory.create(params)
    await chatRoomRepository.save(chatRoom)
    await myRoomRepository.save(params.user.userId, chatRoom.roomId)
  }
  public findAll = async (): Promise<ChatRoom[]> => {
    return chatRoomRepository.findAll()
  }

  public findByUserId = async (userId: string): Promise<ChatRoom[]> => {
    const roomIds = await myRoomRepository.findRoomIds(userId)
    if (roomIds.length === 0) return []
    const rooms = await chatRoomRepository.findByIds(roomIds)
    return rooms
  }

  public join = async (roomId: string, user: User): Promise<void> => {
    const room = await chatRoomRepository.findById(roomId)
    if (!room) {
      throw new Error(this.NOT_FOUND_ERROR)
    }
    const roomIds = await myRoomRepository.findRoomIds(user.userId)
    if (roomIds.includes(roomId)) {
      return
    }
    await myRoomRepository.save(user.userId, roomId)
    const newRoom = joinUser(user, room)
    await chatRoomRepository.save(newRoom)
  }

  public leave = async (roomId: string): Promise<void> => {
    const userId = authRepository.getUid()
    if (!userId) {
      throw new Error(this.LOGIN_ERROR)
    }
    const room = await chatRoomRepository.findById(roomId)
    if (!room) {
      throw new Error(this.NOT_FOUND_ERROR)
    }
    const roomIds = await myRoomRepository.findRoomIds(userId)
    if (!roomIds.includes(roomId)) {
      return
    }
    await myRoomRepository.delete(userId, roomId)
    const newRoom = leaveUser(userId, room)
    await chatRoomRepository.save(newRoom)
  }
}

export const chatRoomsService = new ChatRoomsServiceImpl()
