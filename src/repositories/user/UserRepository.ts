import { User } from "../../entities/User"

export interface UserRepository {
  findById: (userId: string) => Promise<User | undefined>
  save(user: User): Promise<void>
}
