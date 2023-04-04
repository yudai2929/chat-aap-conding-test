import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore"
import { User } from "../../entities/User"
import { UserDocument } from "./UserDocument"

export const userConverter = {
  toFirestore: (user: User): UserDocument => {
    const document = {
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      imageProfileUrl: user.imageProfileUrl,
    } as UserDocument
    return document
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): User => {
    const data = snapshot.data(options)
    const user = {
      userId: snapshot.id,
      name: data.name,
      email: data.email,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      imageProfileUrl: data.imageProfileUrl,
    } as User
    return user
  },
}
