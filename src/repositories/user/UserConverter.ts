import { QueryDocumentSnapshot, SnapshotOptions, Timestamp } from "firebase/firestore"
import { User } from "../../entities/User"
import { UserDocument } from "./UserDocument"

export const userConverter = {
  toFirestore: (user: User): UserDocument => {
    const document = {
      name: user.name,
      email: user.email,
      createdAt: Timestamp.fromDate(user.createdAt),
      updatedAt: Timestamp.fromDate(user.updatedAt),
      imageProfileUrl: user.imageProfileUrl,
    } as UserDocument
    return document
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): User => {
    const data = snapshot.data(options) as UserDocument
    const user = {
      userId: snapshot.id,
      name: data.name,
      email: data.email,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
      imageProfileUrl: data.imageProfileUrl,
    }
    return user
  },
}
