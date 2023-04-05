import React from "react"
import { useFetchMyChatRooms } from "../../../../utils/hooks/chatRoom/useFetchChatRoom"
import { Box, HStack, VStack } from "@chakra-ui/react"
import { ChatRoomPanel } from "../../../ui/features/chat/RoomPanel"
import { ChatTextarea } from "../../../ui/features/chat/Textarea"
import { useRouter } from "next/router"
import { pagesPath } from "../../../../utils/$path"
import { useCreateMessage } from "../../../../utils/hooks/message/useMutationMessage"
import { useUser } from "../../../../store/useUser"
import { useFetchMessage } from "../../../../utils/hooks/message/useFetchMessage"
import { ChatMessage } from "../../../ui/features/chat/Message"

interface Props {
  roomId: string
}
export const RoomDetailPage = ({ roomId }: Props) => {
  const { data: myRooms = [], refetch: refetchMine } = useFetchMyChatRooms()
  const { user } = useUser()
  const { mutate: sendMessage } = useCreateMessage()
  const { data: messages } = useFetchMessage(roomId)
  const router = useRouter()
  const onClickPanel = (roomId: string) => {
    router.push(pagesPath.rooms._id(roomId).$url())
  }

  const onSubmitMessage = (text: string) => {
    if (!user) return
    const params = {
      roomId,
      text,
      user,
    }
    sendMessage(params, {
      onSuccess: () => {
        refetchMine()
      },
    })
  }

  return (
    <HStack px={4} py={8} h={"full"} alignItems={"start"}>
      <VStack spacing={0}>
        {myRooms.map(room => (
          <ChatRoomPanel
            chatRoom={room}
            isActive={roomId === room.roomId}
            key={room.roomId}
            onClick={() => onClickPanel(room.roomId)}
          />
        ))}
      </VStack>
      <Box w="full" h={"full"} position={"relative"}>
        <VStack spacing={4} overflow={"scroll"} h={"80vh"}>
          {messages.map(message => (
            <ChatMessage
              message={message}
              isMine={message.senderUser.userId === user?.userId}
              key={message.messageId}
            />
          ))}
        </VStack>

        <Box w="full" position={"absolute"} bottom={0}>
          <ChatTextarea onSubmit={onSubmitMessage} />
        </Box>
      </Box>
    </HStack>
  )
}
