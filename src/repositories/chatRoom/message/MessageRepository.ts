import { Message } from "../../../entities/Message"

export interface MessageRepository {
  save(roomId: string, message: Message): Promise<void>
}
