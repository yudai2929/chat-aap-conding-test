import { useMutation } from "@tanstack/react-query"
import { authService } from "../../../services/auth/AuthServiceImpl"

export const useLogOut = () => {
  return {
    ...useMutation(() => authService.logout()),
  }
}
