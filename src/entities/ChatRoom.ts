import { Message } from "./Message"

export type ChatRoom = {
  roomId: string
  title: string
  description: string
  imagePath?: string
  createdAt: Date
  updatedAt: Date
  latestMessage?: Message
}
