import { FieldPath, collection, doc, documentId, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { ChatRoom } from "../../entities/ChatRoom"
import { ChatRoomRepository } from "./ChatRoomRepository"
import { db } from "../../plugins/firebase/client"
import { chatRoomConverter } from "./ChatRoomConverter"

class ChatRoomRepositoryImpl implements ChatRoomRepository {
  private readonly chatRoomColl = collection(db, "chatRooms").withConverter(chatRoomConverter)
  public save = async (chatRoom: ChatRoom): Promise<void> => {
    const chatRoomRef = doc(db, "chatRooms", chatRoom.roomId).withConverter(chatRoomConverter)
    await setDoc(chatRoomRef, chatRoom)
  }
  public findAll = async (): Promise<ChatRoom[]> => {
    const chatRoomRef = this.chatRoomColl
    const res = await getDocs(chatRoomRef)
    return res.docs.map(doc => doc.data())
  }
  public findById = async (roomId: string): Promise<ChatRoom | undefined> => {
    const chatRoomRef = doc(db, "chatRooms", roomId).withConverter(chatRoomConverter)
    const res = await getDoc(chatRoomRef)
    return res.data()
  }
  public findByIds = async (roomIds: string[]): Promise<ChatRoom[]> => {
    const chatRoomRef = query(this.chatRoomColl, where(documentId(), "in", roomIds))
    const res = await getDocs(chatRoomRef)
    return res.docs.map(doc => doc.data())
  }
  public update = async (chatRoom: ChatRoom): Promise<void> => {
    const chatRoomRef = doc(db, "chatRooms", chatRoom.roomId).withConverter(chatRoomConverter)
    await setDoc(chatRoomRef, chatRoom)
  }
}

export const chatRoomRepository = new ChatRoomRepositoryImpl()
