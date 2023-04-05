import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import { Message } from "../../../../../entities/Message"
import { convertDateToString } from "../../../../../utils/libs/convertDateToString"

interface Props {
  message: Message
  isMine: boolean
}
export const ChatMessage = ({ message, isMine }: Props) => {
  const alignItems = isMine ? "end" : "start"
  return (
    <VStack w="full" alignItems={alignItems}>
      {isMine || (
        <HStack>
          <Avatar size={"xs"} src={message.senderUser.imageProfileUrl} />
          <Text fontSize={"xs"}>{message.senderUser.name}</Text>
        </HStack>
      )}
      <VStack pl={6} alignItems={alignItems}>
        <MessageText text={message.text} />
        <DateText date={message.createdAt} />
      </VStack>
    </VStack>
  )
}

const DateText = ({ date }: { date: Date }) => {
  return (
    <Text color={"gray.500"} fontSize={"xs"}>
      {convertDateToString(date)}
    </Text>
  )
}

const MessageText = ({ text }: { text: string }) => {
  return (
    <Text bgColor={"gray.100"} p={1} rounded={"md"} fontSize={"sm"}>
      {text}
    </Text>
  )
}
