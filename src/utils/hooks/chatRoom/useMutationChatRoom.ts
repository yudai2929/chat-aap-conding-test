import { useMutation } from "@tanstack/react-query"
import { chatRoomsService } from "../../../services/chatRoom/ChatRoomsServiceImpl"
import { useUser } from "../../../store/useUser"
import { ChatRoomParams } from "../../../services/chatRoom/ChatRoomParams"

export const useCreateChatRoom = () => {
  return {
    ...useMutation((params: ChatRoomParams) => chatRoomsService.save(params)),
  }
}

export const useJoinChatRoom = () => {
  const { user } = useUser()
  return {
    ...useMutation((roomId: string) => {
      if (!user) throw new Error("User not found")
      return chatRoomsService.join(roomId, user)
    }),
  }
}

export const useLeaveChatRoom = () => {
  return {
    ...useMutation((roomId: string) => {
      return chatRoomsService.leave(roomId)
    }),
  }
}
