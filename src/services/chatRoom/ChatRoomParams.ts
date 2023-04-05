import { User } from "../../entities/User"

export type ChatRoomParams = {
  title: string
  description: string
  imagePath?: string
  user: User
}
