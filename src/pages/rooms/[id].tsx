import { useRouter } from "next/router"
import { RoomDetailPage } from "../../components/pages/Rooms/Detail/Page"

export default function RoomDetail() {
  const router = useRouter()
  const roomId = router.query.id
  if (typeof roomId !== "string") return null
  return <RoomDetailPage roomId={String(roomId)} />
}
