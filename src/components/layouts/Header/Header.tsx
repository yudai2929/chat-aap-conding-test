import { Box, HStack, Heading } from "@chakra-ui/react"
import React from "react"
import { ButtonVPrimary } from "../../ui/common/Button/VPrimary"
import { useRouter } from "next/router"
import { HEADER_HEIGHT } from "./constants"

export const Header = () => {
  return (
    <HStack px={8} py={2} boxShadow="md" height={HEADER_HEIGHT} justifyContent={"space-between"} as={"header"}>
      <Heading color={"primary"}>Chat App</Heading>
      <ButtonVPrimary>ログイン</ButtonVPrimary>
    </HStack>
  )
}
