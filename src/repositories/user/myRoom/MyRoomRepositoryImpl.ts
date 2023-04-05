import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"
import { MyRoomRepository } from "./MyRoomRepository"
import { db } from "../../../plugins/firebase/client"

class MyRoomRepositoryImpl implements MyRoomRepository {
  public findRoomIds = async (userId: string): Promise<string[]> => {
    const userMyRoomRef = collection(db, `users/${userId}/myRooms`)
    const res = await getDocs(userMyRoomRef)
    return res.docs.map(doc => doc.id)
  }
  public save = async (userId: string, roomId: string): Promise<void> => {
    const userMyRoomRef = doc(db, `users/${userId}/myRooms`, roomId)
    await setDoc(userMyRoomRef, { roomId })
  }
  public delete = async (userId: string, roomId: string): Promise<void> => {
    const userMyRoomRef = doc(db, `users/${userId}/myRooms`, roomId)
    await deleteDoc(userMyRoomRef)
  }
}

export const myRoomRepository = new MyRoomRepositoryImpl()
