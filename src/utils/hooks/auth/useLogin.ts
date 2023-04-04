import { useMutation } from "@tanstack/react-query"
import { authService } from "../../../services/auth/AuthServiceImpl"

export const useLogin = () => {
  return {
    ...useMutation(() => authService.login()),
  }
}
