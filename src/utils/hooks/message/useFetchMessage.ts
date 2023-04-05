import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../plugins/firebase/client"
import { messageConverter } from "../../../repositories/chatRoom/message/MessageConverter"
import { Message } from "../../../entities/Message"

export const useFetchMessage = (roomId: string) => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const ref = collection(db, `chatRooms/${roomId}/messages`).withConverter(messageConverter)

    return onSnapshot(query(ref, orderBy("createdAt")), snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [roomId])

  return { data: messages }
}
