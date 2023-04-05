import { DocumentData, QueryDocumentSnapshot, SnapshotOptions, Timestamp } from "firebase/firestore"
import { ChatRoom } from "../../entities/ChatRoom"
import { ChatRoomDocument } from "./ChatRoomDocument"

export const chatRoomConverter = {
  toFirestore: (chatRoom: ChatRoom): DocumentData => {
    const document: ChatRoomDocument = {
      title: chatRoom.title,
      description: chatRoom.description,
      imagePath: chatRoom.imagePath ?? null,
      createdAt: Timestamp.fromDate(chatRoom.createdAt),
      updatedAt: Timestamp.fromDate(chatRoom.updatedAt),
      users: chatRoom.users.map(user => ({
        userId: user.userId,
        name: user.name,
        email: user.email,
        createdAt: Timestamp.fromDate(user.createdAt),
        updatedAt: Timestamp.fromDate(user.updatedAt),
        imageProfileUrl: user.imageProfileUrl,
      })),
      latestMessage: chatRoom.latestMessage
        ? {
            messageId: chatRoom.latestMessage.messageId,
            roomId: chatRoom.latestMessage.roomId,
            createdAt: Timestamp.fromDate(chatRoom.latestMessage.createdAt),
            senderUser: {
              userId: chatRoom.latestMessage.senderUser.userId,
              name: chatRoom.latestMessage.senderUser.name,
              email: chatRoom.latestMessage.senderUser.email,
              createdAt: Timestamp.fromDate(chatRoom.latestMessage.senderUser.createdAt),
              updatedAt: Timestamp.fromDate(chatRoom.latestMessage.senderUser.updatedAt),
              imageProfileUrl: chatRoom.latestMessage.senderUser.imageProfileUrl,
            },
            text: chatRoom.latestMessage.text,
          }
        : null,
    }
    return document
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<ChatRoomDocument>, options: SnapshotOptions): ChatRoom => {
    const data = snapshot.data(options) as ChatRoomDocument
    return {
      roomId: snapshot.id,
      title: data.title,
      description: data.description,
      imagePath: data.imagePath ?? undefined,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
      users: data.users.map(user => ({
        userId: user.userId,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt.toDate(),
        updatedAt: user.updatedAt.toDate(),
        imageProfileUrl: user.imageProfileUrl,
      })),
      latestMessage: data.latestMessage
        ? {
            messageId: data.latestMessage.messageId,
            roomId: data.latestMessage.roomId,
            createdAt: data.latestMessage.createdAt.toDate(),
            senderUser: {
              userId: data.latestMessage.senderUser.userId,
              name: data.latestMessage.senderUser.name,
              email: data.latestMessage.senderUser.email,
              createdAt: data.latestMessage.senderUser.createdAt.toDate(),
              updatedAt: data.latestMessage.senderUser.updatedAt.toDate(),
              imageProfileUrl: data.latestMessage.senderUser.imageProfileUrl,
            },
            text: data.latestMessage.text,
          }
        : undefined,
    }
  },
}
