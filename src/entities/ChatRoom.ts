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

export const joinUser = (user: User, chatRoom: ChatRoom): ChatRoom => {
  const users = [...chatRoom.users, user]
  return { ...chatRoom, users }
}

export const leaveUser = (userId: string, chatRoom: ChatRoom): ChatRoom => {
  const users = chatRoom.users.filter(u => u.userId !== userId)
  return { ...chatRoom, users }
}
