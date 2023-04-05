import React, { ChangeEventHandler, useRef, useState } from "react"
import { Modal } from "../../../common/Modal"
import { ButtonVPrimary } from "../../../common/Button/VPrimary"
import { ButtonDPrimary } from "../../../common/Button/DPrimary"
import { FormControl, FormLabel, VStack } from "@chakra-ui/react"
import { Input } from "../../../common/Input"
import { Textarea } from "../../../common/Textarea/Textarea"

interface Props {
  onClose: () => void
  isOpen: boolean
  isLoading: boolean
  onSubmit: (title: string, description: string) => void
}

export const ChatRoomCreateModal = ({ onClose, isOpen, onSubmit, isLoading }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = () => {
    if (!titleRef.current || !descriptionRef.current) return
    onSubmit(titleRef.current.value, descriptionRef.current.value)
  }
  return (
    <Modal
      title="チャットルームを作成する"
      onClose={onClose}
      isOpen={isOpen}
      modalFooter={
        <>
          <ButtonVPrimary mr={3} onClick={onClose} isLoading={isLoading} isDisabled={isLoading}>
            キャンセル
          </ButtonVPrimary>
          <ButtonDPrimary onClick={handleSubmit} isLoading={isLoading} isDisabled={isLoading}>
            作成する
          </ButtonDPrimary>
        </>
      }
    >
      <VStack>
        <FormControl>
          <FormLabel>タイトル</FormLabel>
          <Input ref={titleRef} />
        </FormControl>
        <FormControl>
          <FormLabel>説明</FormLabel>
          <Textarea ref={descriptionRef} />
        </FormControl>
      </VStack>
    </Modal>
  )
}
