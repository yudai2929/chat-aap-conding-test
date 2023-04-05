import { Avatar, HStack, VStack, Text } from "@chakra-ui/react"
import React, { ComponentProps } from "react"
import { ChatRoom } from "../../../../../entities/ChatRoom"
import { convertDateToString } from "../../../../../utils/libs/convertDateToString"

type Props = {
  chatRoom: ChatRoom
  isActive: boolean
} & ComponentProps<typeof HStack>

export const ChatRoomPanel = ({ chatRoom, isActive, ...props }: Props) => {
  return (
    <HStack bg={isActive ? "gray.50" : "white"} p={2} _hover={{ bgColor: "gray.50" }} cursor={"pointer"} {...props}>
      <Avatar src={chatRoom.imagePath} />
      <VStack spacing={0} alignItems={"start"}>
        <Text fontSize={"md"}>{chatRoom.title}</Text>
        {chatRoom.latestMessage && (
          <>
            <Text fontSize={"xs"} color={"gray.600"}>
              {chatRoom.latestMessage?.text}
            </Text>
            <Text fontSize={"xs"} color={"gray.600"}>
              {convertDateToString(chatRoom.latestMessage?.createdAt)}
            </Text>
          </>
        )}
      </VStack>
    </HStack>
  )
}
