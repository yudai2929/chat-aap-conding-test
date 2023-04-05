import { User } from "./User"

export type Message = {
  messageId: string
  createdAt: Date
  senderUser: User
  text: string
}
