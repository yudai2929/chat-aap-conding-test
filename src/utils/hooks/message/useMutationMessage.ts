import { useMutation } from "@tanstack/react-query"
import { messageService } from "../../../services/message/MessageServiceImpl"
import { MessageParams } from "../../../services/message/MessageParams"

export const useCreateMessage = () => {
  return {
    ...useMutation((params: MessageParams) => messageService.save(params)),
  }
}
