import { useEffect } from "react"
import { useAuth } from "../utils/hooks/auth/useAuth"
import { userRepository } from "../repositories/user/UserRepositoryImpl"
import { useUser } from "../store/useUser"

interface AuthProviderProps {
  children: React.ReactNode
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { user: authUser } = useAuth()
  const { setUser } = useUser()
  useEffect(() => {
    ;(async () => {
      if (authUser === undefined) return
      if (authUser === null) {
        // 未ログイン
        setUser(undefined)
        return
      }
      const userId = authUser.uid
      const user = await userRepository.findById(userId)
      setUser(user)
    })()
  }, [authUser, setUser])
  return <> {children} </>
}
