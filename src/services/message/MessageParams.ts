import { User } from "../../entities/User"

export interface MessageParams {
  roomId: string
  text: string
  user: User
}
