export interface MyRoomRepository {
  findRoomIds: (userId: string) => Promise<string[]>
  save(userId: string, roomId: string): Promise<void>
  delete(userId: string, roomId: string): Promise<void>
}
