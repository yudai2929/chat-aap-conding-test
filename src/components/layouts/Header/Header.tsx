import { Avatar, Box, HStack, Heading, IconButton } from "@chakra-ui/react"
import React from "react"
import { ButtonVPrimary } from "../../ui/common/Button/VPrimary"
import { useRouter } from "next/router"
import { HEADER_HEIGHT } from "./constants"

import { useUser } from "../../../store/useUser"
import { BsFillChatDotsFill } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { pagesPath } from "../../../utils/$path"

export const Header = () => {
  const router = useRouter()
  const { user } = useUser()
  const onClickTop = () => {
    router.push(pagesPath.$url())
  }
  const onClickLogin = () => {
    router.push(pagesPath.login.$url())
  }
  const onClickChat = () => {
    router.push(pagesPath.rooms.$url())
  }
  return (
    <HStack px={8} py={2} boxShadow="md" height={HEADER_HEIGHT} justifyContent={"space-between"} as={"header"}>
      <Heading color={"primary"} cursor={"pointer"} onClick={onClickTop} fontSize={"2xl"}>
        Chat App
      </Heading>
      {user ? (
        <HStack spacing={4}>
          <IconButton
            onClick={onClickChat}
            aria-label="Search database"
            icon={<AiFillHome size={24} color="gray" />}
            bg="white"
          />
          <IconButton
            onClick={onClickChat}
            aria-label="Search database"
            icon={<BsFillChatDotsFill size={24} color="gray" />}
            bg="white"
          />
          <Avatar src={user.imageProfileUrl} size={"sm"} />
        </HStack>
      ) : (
        <ButtonVPrimary onClick={onClickLogin}>ログイン</ButtonVPrimary>
      )}
    </HStack>
  )
}
