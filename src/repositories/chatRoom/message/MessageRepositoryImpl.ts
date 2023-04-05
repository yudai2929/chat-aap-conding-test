import { doc, setDoc } from "firebase/firestore"
import { Message } from "../../../entities/Message"
import { MessageRepository } from "./MessageRepository"
import { db } from "../../../plugins/firebase/client"
import { messageConverter } from "./MessageConverter"

class MessageRepositoryImpl implements MessageRepository {
  public save = async (roomId: string, message: Message): Promise<void> => {
    console.log(message)
    const ref = doc(db, `chatRooms/${roomId}/messages`, message.messageId).withConverter(messageConverter)
    await setDoc(ref, message)
  }
}

export const messageRepository = new MessageRepositoryImpl()
