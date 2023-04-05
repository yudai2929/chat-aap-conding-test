import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ChatRoomTabs } from "./ChatRoomTabs"
import { mockChatRoom, mockChatRoom2 } from "../../../../../mocks/chatRoom"

export default {
  title: "ui/features/ChatRoom/Tabs",
  component: ChatRoomTabs,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ChatRoomTabs>

export const Default: ComponentStory<typeof ChatRoomTabs> = () => {
  return <ChatRoomTabs allRooms={[mockChatRoom, mockChatRoom2]} myRooms={[mockChatRoom]} joinRoom={() => {}} />
}
