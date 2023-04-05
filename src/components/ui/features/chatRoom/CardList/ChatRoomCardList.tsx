import React from "react"
import { ChatRoom } from "../../../../../entities/ChatRoom"
import { ChatRoomCard } from "../Card"
import { VStack } from "@chakra-ui/react"

interface Props {
  chatRooms: ChatRoom[]
  joinRoom: (roomId: string) => void
  leaveRoom: (roomId: string) => void
}
export const ChatRoomCardList = ({ chatRooms, joinRoom, leaveRoom }: Props) => {
  return (
    <VStack>
      {chatRooms.map(chatRoom => {
        return (
          <ChatRoomCard
            chatRoom={chatRoom}
            key={chatRoom.roomId}
            w={"full"}
            onClickJoin={() => joinRoom(chatRoom.roomId)}
            onClickLeave={() => leaveRoom(chatRoom.roomId)}
          />
        )
      })}
    </VStack>
  )
}
