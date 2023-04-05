import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ChatMessage } from "./ChatMessage"
import { mockChatRoom } from "../../../../../mocks/chatRoom"
import { mockMessage } from "../../../../../mocks/message"

export default {
  title: "ui/features/Chat/Message",
  component: ChatMessage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ChatMessage>

export const Default: ComponentStory<typeof ChatMessage> = () => {
  return <ChatMessage message={mockMessage} isMine={true} />
}

export const notIsMine: ComponentStory<typeof ChatMessage> = () => {
  return <ChatMessage message={mockMessage} isMine={false} />
}
