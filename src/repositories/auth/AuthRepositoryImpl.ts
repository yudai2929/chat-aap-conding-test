import { GoogleAuthProvider, UserCredential, signInWithPopup } from "@firebase/auth"
import { AuthRepository } from "./AuthRepository"
import { auth } from "../../plugins/firebase/client"
import { signOut } from "firebase/auth"

class AuthRepositoryImpl implements AuthRepository {
  private readonly provider = new GoogleAuthProvider()

  public login = async (): Promise<UserCredential> => {
    const res = await signInWithPopup(auth, this.provider)
    return res
  }
  public logout = async () => {
    return signOut(auth)
  }

  public getUid = (): string | undefined => {
    const user = auth.currentUser
    return user?.uid
  }
}

export const authRepository = new AuthRepositoryImpl()
