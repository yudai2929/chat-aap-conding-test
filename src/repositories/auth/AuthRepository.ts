import { UserCredential } from "firebase/auth"

export interface AuthRepository {
  login: () => Promise<UserCredential>
  logout: () => Promise<void>
}
