import { generateId } from "../../utils/libs/generateId"
import { Message } from "../Message"
import { User } from "../User"

type MessageParams = {
  text: string
  user: User
}
export const messageFactory = {
  create(params: MessageParams): Message {
    return {
      messageId: generateId(),
      text: params.text,
      senderUser: params.user,
      createdAt: new Date(),
    }
  },
}
