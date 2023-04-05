import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ChatRoomCreateModal } from "./ChatRoomCreateModal"
import { useDisclosure } from "@chakra-ui/react"

export default {
  title: "ui/features/ChatRoom/Modal",
  component: ChatRoomCreateModal,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ChatRoomCreateModal>

export const Default: ComponentStory<typeof ChatRoomCreateModal> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onSubmit = (title: string, description: string) => {
    console.log(title, description)
    console.log("submit")
  }

  return <ChatRoomCreateModal isOpen={true} onClose={onClose} onSubmit={onSubmit} isLoading={false} />
}
