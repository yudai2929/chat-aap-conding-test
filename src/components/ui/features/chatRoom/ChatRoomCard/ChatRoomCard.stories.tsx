import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ChatRoomCard } from "./ChatRoomCard"
import { ChatRoom } from "../../../../../entities/ChatRoom"
import { title } from "process"
import { User } from "../../../../../entities/User"
import { defaultImageUrl } from "../../../../../entities/factories/UserFactory"

export default {
  title: "ui/features/ChatRoom",
  component: ChatRoomCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ChatRoomCard>

export const Default: ComponentStory<typeof ChatRoomCard> = () => {
  const user: User = {
    userId: "1",
    name: "test",
    email: "test",
    createdAt: new Date(),
    updatedAt: new Date(),
    imageProfileUrl: defaultImageUrl,
  }
  const chatRoom: ChatRoom = {
    roomId: "1",
    title: "暇な人雑談しましょう！",
    description: "暇な人が待つ待って雑談します。誰でも歓迎！！",
    imagePath:
      "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    createdAt: new Date(),
    updatedAt: new Date(),
    users: [user],
  }
  return <ChatRoomCard chatRoom={chatRoom} />
}
