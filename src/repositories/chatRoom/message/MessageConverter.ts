import { DocumentData, QueryDocumentSnapshot, Timestamp } from "firebase/firestore"
import { Message } from "../../../entities/Message"
import { MessageDocument } from "./MessageDocument"

export const messageConverter = {
  toFirestore(message: Message): DocumentData {
    const document: MessageDocument = {
      text: message.text,
      createdAt: Timestamp.fromDate(message.createdAt),
      senderUser: {
        userId: message.senderUser.userId,
        name: message.senderUser.name,
        email: message.senderUser.email,
        createdAt: Timestamp.fromDate(message.senderUser.createdAt),
        updatedAt: Timestamp.fromDate(message.senderUser.updatedAt),
        imageProfileUrl: message.senderUser.imageProfileUrl,
      },
    }
    return document
  },
  fromFirestore(snapshot: QueryDocumentSnapshot<MessageDocument>): Message {
    const data = snapshot.data()
    return {
      messageId: snapshot.id,
      text: data.text,
      createdAt: data.createdAt.toDate(),
      senderUser: {
        userId: data.senderUser.userId,
        name: data.senderUser.name,
        email: data.senderUser.email,
        createdAt: data.senderUser.createdAt.toDate(),
        updatedAt: data.senderUser.updatedAt.toDate(),
        imageProfileUrl: data.senderUser.imageProfileUrl,
      },
    }
  },
}
