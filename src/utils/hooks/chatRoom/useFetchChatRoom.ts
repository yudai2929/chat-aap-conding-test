import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import { ChatRoom } from "../../../entities/ChatRoom"
import { chatRoomsService } from "../../../services/chatRoom/ChatRoomsServiceImpl"
import { useUser } from "../../../store/useUser"

const QUERY_KEYS = {
  ALL: () => "chatRooms",
  MY: () => "myChatRooms",
}
export const useFetchChatRooms = (queryOptions?: UseQueryOptions<ChatRoom[]>) => {
  return useQuery<ChatRoom[]>([QUERY_KEYS.ALL()], () => chatRoomsService.findAll(), {
    ...queryOptions,
  })
}

export const useFetchMyChatRooms = (queryOptions?: UseQueryOptions<ChatRoom[]>) => {
  const { user } = useUser()
  return useQuery<ChatRoom[]>(
    [QUERY_KEYS.MY(), Boolean(user?.userId)],
    () => chatRoomsService.findByUserId(user?.userId!),
    {
      ...queryOptions,
    }
  )
}
