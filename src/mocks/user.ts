import { User } from "../entities/User"
import { defaultImageUrl } from "../entities/factories/UserFactory"

export const mockUser: User = {
  userId: "1",
  name: "山田太郎",
  email: "test",
  createdAt: new Date(),
  updatedAt: new Date(),
  imageProfileUrl: "https://bit.ly/dan-abramov",
}

export const mockUser2: User = {
  userId: "2",
  name: "斉藤花子",
  email: "test",
  createdAt: new Date(),
  updatedAt: new Date(),
  imageProfileUrl: "https://bit.ly/sage-adebayo",
}
