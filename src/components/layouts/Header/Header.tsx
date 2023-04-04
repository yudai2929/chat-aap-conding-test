import { Box, HStack, Heading } from "@chakra-ui/react"
import React from "react"
import { ButtonVPrimary } from "../../ui/common/Button/VPrimary"
import { useRouter } from "next/router"
import { HEADER_HEIGHT } from "./constants"
import { pagesPath } from "../../../lib/$path"

export const Header = () => {
  const router = useRouter()
  const onClickTop = () => {
    router.push(pagesPath.$url())
  }
  const onClickLogin = () => {
    router.push(pagesPath.login.$url())
  }
  return (
    <HStack px={8} py={2} boxShadow="md" height={HEADER_HEIGHT} justifyContent={"space-between"} as={"header"}>
      <Heading color={"primary"} cursor={"pointer"} onClick={onClickTop}>
        Chat App
      </Heading>
      <ButtonVPrimary onClick={onClickLogin}>ログイン</ButtonVPrimary>
    </HStack>
  )
}
