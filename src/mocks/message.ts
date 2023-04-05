import { Message } from "../entities/Message"
import { mockUser, mockUser2 } from "./user"

export const mockMessage: Message = {
  messageId: "1",
  text: "こんにちは！",
  createdAt: new Date(),
  senderUser: mockUser,
}

export const mockMessage2: Message = {
  messageId: "1",
  text: "よろしく！",
  createdAt: new Date(),
  senderUser: mockUser2,
}

export const mockMessage3: Message = {
  messageId: "1",
  text: "よろしく！",
  createdAt: new Date(),
  senderUser: mockUser2,
}

export const mockMessage4: Message = {
  messageId: "1",
  text: "よろしく！",
  createdAt: new Date(),
  senderUser: mockUser2,
}

export const mockMessageList = [mockMessage, mockMessage2, mockMessage3, mockMessage4]
