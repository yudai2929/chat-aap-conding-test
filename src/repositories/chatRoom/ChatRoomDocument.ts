import { Timestamp } from "firebase/firestore"

export type ChatRoomDocument = {
  title: string
  description: string
  imagePath: string | null
  createdAt: Timestamp
  updatedAt: Timestamp
  latestMessage: {
    messageId: string
    roomId: string
    createdAt: Timestamp
    senderUser: {
      userId: string
      name: string
      email: string
      createdAt: Timestamp
      updatedAt: Timestamp
      imageProfileUrl: string
    }
    text: string
  } | null
  users: {
    userId: string
    name: string
    email: string
    createdAt: Timestamp
    updatedAt: Timestamp
    imageProfileUrl: string
  }[]
}
