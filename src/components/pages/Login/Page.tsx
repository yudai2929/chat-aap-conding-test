import { VStack, Text, Box, Divider, Button } from "@chakra-ui/react"
import React from "react"
import { GoogleIcon } from "../../../icons/Google"
import { LoginButton } from "../../ui/features/login/LoginButton"
import { useLogin } from "../../../utils/hooks/auth/useLogin"
import { useRouter } from "next/router"
import { pagesPath } from "../../../utils/$path"

export const LoginPage = () => {
  const { mutate: login } = useLogin()
  const router = useRouter()
  const onClickLogin = async () => {
    login()
    router.push(pagesPath.rooms.$url())
  }
  return (
    <VStack h={"full"} alignContent={"center"} justifyContent={"center"}>
      <VStack>
        <Text as="h1" fontSize={"2xl"}>
          ログイン
        </Text>
        <Divider />
        <LoginButton onClick={onClickLogin} />
      </VStack>
    </VStack>
  )
}
