import { doc, getDoc, setDoc } from "firebase/firestore"
import { User } from "../../entities/User"
import { UserRepository } from "./UserRepository"
import { db } from "../../plugins/firebase/client"
import { userConverter } from "./UserConverter"

class UserRepositoryImpl implements UserRepository {
  public findById = async (userId: string): Promise<User | undefined> => {
    const userRef = doc(db, `users/${userId}`).withConverter(userConverter)
    const res = await getDoc(userRef)
    return res.data()
  }
  public save = async (user: User) => {
    const userRef = doc(db, "users", user.userId).withConverter(userConverter)
    await setDoc(userRef, user)
  }
}

export const userRepository = new UserRepositoryImpl()
