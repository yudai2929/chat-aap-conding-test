import { Timestamp } from "firebase/firestore"
import { UserDocument } from "../../user/UserDocument"

export type MessageDocument = {
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
}
