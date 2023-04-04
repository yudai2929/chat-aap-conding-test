import { Message } from "./Message"
import { User } from "./User"

export type ChatRoom = {
  roomId: string
  title: string
  description: string
  imagePath?: string
  createdAt: Date
  updatedAt: Date
  latestMessage?: Message
  users: User[]
}
