import { updateLatestMessage } from "../../entities/ChatRoom"
import { messageFactory } from "../../entities/factories/MessageFactory"
import { chatRoomRepository } from "../../repositories/chatRoom/ChatRoomRepositoryImpl"
import { messageRepository } from "../../repositories/chatRoom/message/MessageRepositoryImpl"
import { MessageParams } from "./MessageParams"
import { MessageService } from "./MessageService"

export class MessageServiceImpl implements MessageService {
  private readonly NOT_FOUND_ERROR = "Room not found"
  public save = async (params: MessageParams): Promise<void> => {
    const room = await chatRoomRepository.findById(params.roomId)
    if (!room) throw new Error(this.NOT_FOUND_ERROR)
    const message = messageFactory.create({
      text: params.text,
      user: params.user,
    })
    await messageRepository.save(params.roomId, message)
    const newRoom = updateLatestMessage(message, room)
    await chatRoomRepository.update(newRoom)
  }
}

export const messageService = new MessageServiceImpl()
