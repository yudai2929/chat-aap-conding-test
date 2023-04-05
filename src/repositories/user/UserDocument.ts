import { Timestamp } from "firebase/firestore"

export type UserDocument = {
  name: string
  email: string
  createdAt: Timestamp
  updatedAt: Timestamp
  imageProfileUrl: string
}
