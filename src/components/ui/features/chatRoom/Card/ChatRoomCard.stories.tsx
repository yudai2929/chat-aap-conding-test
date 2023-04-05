import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ChatRoomCard } from "./ChatRoomCard"
import { mockChatRoom } from "../../../../../mocks/chatRoom"

export default {
  title: "ui/features/ChatRoom/Card",
  component: ChatRoomCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ChatRoomCard>

export const Default: ComponentStory<typeof ChatRoomCard> = () => {
  return <ChatRoomCard chatRoom={mockChatRoom} />
}
