import { useEffect, useState } from "react"
import { auth } from "../../../plugins/firebase/client"
import { User } from "firebase/auth"

export const useAuth = () => {
  const [user, setUser] = useState<User | null | undefined>(undefined)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    })

    return unsubscribe
  }, [])

  return { user }
}
