import React, { ComponentProps } from "react"
import {
  Modal as CModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react"

type Props = { modalFooter?: React.ReactNode; title: string } & ComponentProps<typeof CModal>

export const Modal = ({ children, title, ...props }: Props) => {
  return (
    <CModal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton color={"primary"} />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{props.modalFooter}</ModalFooter>
      </ModalContent>
    </CModal>
  )
}
