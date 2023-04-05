import { VStack, Text } from "@chakra-ui/react"
import React from "react"
import { ButtonDPrimary } from "../ui/common/Button/DPrimary"
import { useRouter } from "next/router"
import { pagesPath } from "../../utils/$path"

export const TopPage = () => {
  const router = useRouter()
  const onClickLogin = () => {
    router.push(pagesPath.login.$url())
  }

  return (
    <VStack h={"full"} alignContent={"center"} justifyContent={"center"}>
      <Text fontSize={"4xl"}>ようこそ、chat appへ</Text>
      <Text fontSize={"lg"}>さぁ、はじめましょう！</Text>
      <ButtonDPrimary onClick={onClickLogin}>ログイン / 新規登録</ButtonDPrimary>
    </VStack>
  )
}
