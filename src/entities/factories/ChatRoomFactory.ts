import { generateId } from "../../utils/libs/generateId"
import { ChatRoom } from "../ChatRoom"
import { User } from "../User"

type ChatRoomParams = {
  title: string
  description: string
  imagePath?: string
  user: User
}

const defaultImagePath =
  "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
export const ChatRoomFactory = {
  create: (params: ChatRoomParams): ChatRoom => {
    return {
      roomId: generateId(),
      title: params.title,
      description: params.description,
      imagePath: params.imagePath ?? defaultImagePath,
      createdAt: new Date(),
      updatedAt: new Date(),
      latestMessage: undefined,
      users: [params.user],
    }
  },
}
