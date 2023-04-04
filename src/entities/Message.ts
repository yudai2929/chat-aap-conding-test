import { User } from "./User"

export type Message = {
  messageId: string
  roomId: string
  createdAt: Date
  senderUser: User
}
