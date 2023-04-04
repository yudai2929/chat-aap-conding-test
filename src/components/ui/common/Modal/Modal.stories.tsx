import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Modal } from "./Modal"
import { useDisclosure, Text, Button } from "@chakra-ui/react"
import { ButtonDPrimary } from "../Button/DPrimary"
import { ButtonVPrimary } from "../Button/VPrimary"

export default {
  title: "ui/common/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Modal>

export const Default: ComponentStory<typeof Modal> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="test"
      modalFooter={
        <>
          <ButtonVPrimary colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </ButtonVPrimary>
          <ButtonDPrimary variant="ghost">Secondary Action</ButtonDPrimary>
        </>
      }
    >
      <Text>test</Text>
    </Modal>
  )
}
