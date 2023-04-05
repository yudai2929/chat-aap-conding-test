import { useMutation } from "@tanstack/react-query"
import { chatRoomsService } from "../../../services/chatRoom/ChatRoomsServiceImpl"
import { ChatRoomParams } from "../../../entities/factories/ChatRoomFactory"
import { useUser } from "../../../store/useUser"

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
