import { atom, useRecoilState } from "recoil"
import { User } from "../entities/User"

export const userState = atom<User | undefined>({
  key: "userState",
  default: undefined,
})

type UseUserType = {
  user: User | undefined
  setUser: (user: User | undefined) => void
}

export const useUser = (): UseUserType => {
  const [user, setUser] = useRecoilState(userState)

  return { user, setUser }
}
