import { MessageParams } from "./MessageParams"

export interface MessageService {
  save(params: MessageParams): Promise<void>
}
