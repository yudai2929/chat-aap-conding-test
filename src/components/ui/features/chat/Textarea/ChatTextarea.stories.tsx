import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ChatTextarea } from "./ChatTextarea"
import { mockChatRoom } from "../../../../../mocks/chatRoom"

export default {
  title: "ui/features/Chat/Textarea",
  component: ChatTextarea,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ChatTextarea>

export const Default: ComponentStory<typeof ChatTextarea> = () => {
  const handleSubmit = (title: string) => {
    console.log(title)
  }
  return <ChatTextarea onSubmit={handleSubmit} />
}
