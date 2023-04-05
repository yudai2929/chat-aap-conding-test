import { HStack, Text, VStack, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { ButtonVPrimary } from "../../ui/common/Button/VPrimary"
import { ChatRoomTabs } from "../../ui/features/chatRoom/Tab"
import { ChatRoomCreateModal } from "../../ui/features/chatRoom/CreateModal"
import { useCreateChatRoom, useJoinChatRoom, useLeaveChatRoom } from "../../../utils/hooks/chatRoom/useMutationChatRoom"
import { useUser } from "../../../store/useUser"
import { useFetchChatRooms, useFetchMyChatRooms } from "../../../utils/hooks/chatRoom/useFetchChatRoom"
import { useRouter } from "next/router"
import { pagesPath } from "../../../utils/$path"

export const RoomsPage = () => {
  const { data: chatRooms = [], refetch: refetchAll } = useFetchChatRooms()
  const { data: myRooms = [], refetch: refetchMine } = useFetchMyChatRooms()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { mutate: postChatRoom, isLoading } = useCreateChatRoom()
  const { mutate: joinChatRoom } = useJoinChatRoom()
  const { mutate: leaveChatRoom } = useLeaveChatRoom()
  const router = useRouter()

  const { user } = useUser()
  const refetch = () => {
    refetchAll()
    refetchMine()
  }
  const onSubmit = (title: string, description: string) => {
    if (!user) return
    postChatRoom(
      { title, description, user },
      {
        onSuccess: () => {
          onClose()
          refetch()
        },
      }
    )
  }
  const onClickJoin = (roomId: string) => {
    if (!user) return
    joinChatRoom(roomId, {
      onSuccess: () => {
        refetch()
        router.push(pagesPath.rooms._id(roomId).$url())
      },
    })
  }

  const onClickLeave = (roomId: string) => {
    if (!user) return
    leaveChatRoom(roomId, {
      onSuccess: () => {
        refetch()
      },
    })
  }
  return (
    <VStack h={"full"} alignContent={"start"} w="full" pt={12} px={48}>
      <HStack w="full" justifyContent={"space-between"}>
        <Text fontSize={"2xl"}>ルーム一覧</Text>
        <ButtonVPrimary onClick={onOpen}>ルーム作成</ButtonVPrimary>
      </HStack>
      <ChatRoomTabs allRooms={chatRooms} myRooms={myRooms} joinRoom={onClickJoin} leaveRoom={onClickLeave} />
      <ChatRoomCreateModal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} isLoading={isLoading} />
    </VStack>
  )
}
