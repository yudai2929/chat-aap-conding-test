import { Avatar, Box, HStack, Heading, IconButton } from "@chakra-ui/react"
import React from "react"
import { ButtonVPrimary } from "../../ui/common/Button/VPrimary"
import { useRouter } from "next/router"
import { HEADER_HEIGHT } from "./constants"

import { useUser } from "../../../store/useUser"
import { BsFillChatDotsFill } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { pagesPath } from "../../../utils/$path"
import { useLogOut } from "../../../utils/hooks/auth/useLogOut"
import { AvatarPopover } from "./AvatarPopover"

export const Header = () => {
  const router = useRouter()
  const { user } = useUser()
  const { mutateAsync: logOut } = useLogOut()
  const onClickTop = () => {
    router.push(pagesPath.$url())
  }
  const onClickLogin = () => {
    router.push(pagesPath.login.$url())
  }
  const onClickChat = () => {
    router.push(pagesPath.rooms.$url())
  }
  const onClickLogOut = async () => {
    await logOut()
    router.push(pagesPath.$url())
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
            icon={<BsFillChatDotsFill size={24} color="gray" />}
            bg="white"
          />
          <AvatarPopover user={user} signOut={onClickLogOut} />
        </HStack>
      ) : (
        <ButtonVPrimary onClick={onClickLogin}>ログイン</ButtonVPrimary>
      )}
    </HStack>
  )
}
