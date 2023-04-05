import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ChatRoomPanel } from "./ChatRoomPanel"
import { mockChatRoom } from "../../../../../mocks/chatRoom"

export default {
  title: "ui/features/Chat/RoomPanel",
  component: ChatRoomPanel,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ChatRoomPanel>

export const Default: ComponentStory<typeof ChatRoomPanel> = () => {
  return <ChatRoomPanel chatRoom={mockChatRoom} isActive={false} />
}
