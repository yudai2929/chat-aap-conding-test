import { ChatRoom } from "../../entities/ChatRoom"
import { User } from "../../entities/User"
import { ChatRoomParams } from "./ChatRoomParams"

export interface ChatRoomsService {
  save(params: ChatRoomParams): Promise<void>
  findAll(): Promise<ChatRoom[]>
  findByUserId(userId: string): Promise<ChatRoom[]>
  join(roomId: string, user: User): Promise<void>
  leave(roomId: string): Promise<void>
}
