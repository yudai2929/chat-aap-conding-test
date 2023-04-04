import { UserCredential } from "firebase/auth"
import { User } from "../User"

export const defaultImageUrl = "https://bit.ly/dan-abramov"

export const userFactory = {
  create: (user: UserCredential): User => {
    return {
      userId: user.user?.uid,
      name: user.user?.displayName ?? "名無しさん",
      email: user.user?.email ?? "",
      createdAt: new Date(),
      updatedAt: new Date(),
      imageProfileUrl: user.user?.photoURL ?? defaultImageUrl,
    }
  },
}
