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
}

export const authRepository = new AuthRepositoryImpl()
