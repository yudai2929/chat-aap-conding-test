import { User } from "../entities/User"
import { defaultImageUrl } from "../entities/factories/UserFactory"

export const mockUser: User = {
  userId: "1",
  name: "test",
  email: "test",
  createdAt: new Date(),
  updatedAt: new Date(),
  imageProfileUrl: defaultImageUrl,
}
