import { Timestamp } from "firebase/firestore"
import { UserDocument } from "../user/UserDocument"

export type MessageDocument = {
  roomId: string
  createdAt: Timestamp
  senderUser: UserDocument & { userId: string }[]
  text: string
}
