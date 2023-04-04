import { userFactory } from "../../entities/factories/UserFactory"
import { authRepository } from "../../repositories/auth/AuthRepositoryImpl"
import { userRepository } from "../../repositories/user/UserRepositoryImpl"
import { AuthService } from "./AuthService"

export class AuthServiceImpl implements AuthService {
  public login = async () => {
    const user = await authRepository.login()
    if (!user) return
    await userRepository.save(userFactory.create(user))
  }

  public logout = async () => {
    await authRepository.logout()
  }
}

export const authService = new AuthServiceImpl()
