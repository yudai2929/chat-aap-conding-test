import { ChatRoom } from "../entities/ChatRoom"
import { mockUser } from "./user"

export const mockChatRoom: ChatRoom = {
  roomId: "1",
  title: "暇な人雑談しましょう！",
  description: "暇な人が待つ待って雑談します。誰でも歓迎！！",
  imagePath:
    "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  createdAt: new Date(),
  updatedAt: new Date(),
  users: [mockUser],
}

export const mockChatRoom2: ChatRoom = {
  roomId: "2",
  title: "寝れない人待ってます！",
  description: "日付変わるまで雑談します！！",
  imagePath:
    "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  createdAt: new Date(),
  updatedAt: new Date(),
  users: [mockUser],
}
