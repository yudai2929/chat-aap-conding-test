import { ChatRoom } from "../../entities/ChatRoom"

export interface ChatRoomRepository {
  save(chatRoom: ChatRoom): Promise<void>
  findAll(): Promise<ChatRoom[]>
  findById(roomId: string): Promise<ChatRoom | undefined>
  findByIds(roomIds: string[]): Promise<ChatRoom[]>
  update(chatRoom: ChatRoom): Promise<void>
}
