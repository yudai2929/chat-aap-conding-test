import { HStack } from "@chakra-ui/react"
import React, { FormEvent, FormEventHandler, useRef } from "react"
import { Input } from "../../../common/Input"
import { ButtonDPrimary } from "../../../common/Button/DPrimary"
import { RiSendPlane2Fill } from "react-icons/ri"

interface Props {
  onSubmit: (value: string) => void
}
export const ChatTextarea = ({ onSubmit }: Props) => {
  const textRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (!textRef.current?.value) return
    onSubmit(textRef.current.value)
    textRef.current.value = ""
  }
  return (
    <HStack as="form" onSubmit={event => handleSubmit(event)}>
      <Input ref={textRef} />
      <ButtonDPrimary type="submit">
        <RiSendPlane2Fill size={20} />
      </ButtonDPrimary>
    </HStack>
  )
}
