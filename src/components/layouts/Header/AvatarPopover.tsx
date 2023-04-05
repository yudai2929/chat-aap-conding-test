import {
  Avatar,
  HStack,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  VStack,
  Text,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react"
import { User } from "../../../entities/User"
import { VscSignOut } from "react-icons/vsc"
interface Props {
  user: User
  signOut: () => void
}

export const AvatarPopover = ({ user, signOut }: Props) => {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Avatar src={user.imageProfileUrl} size={"sm"} as="button" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">
          <HStack py="4" px="2" spacing="4">
            <Avatar
              width="32px"
              height="32px"
              src={user.imageProfileUrl}
              bg="white"
              borderWidth={"1px"}
              borderColor={"gray.200"}
            />
            <VStack w="full" alignItems={"left"} spacing="0">
              <Text>{user.name}</Text>
              <Text fontSize={"xs"}>{user.email}</Text>
            </VStack>
          </HStack>
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <HStack as="button" py="4" px="2" w="full" _hover={{ bgColor: "gray.100" }} onClick={signOut}>
            <VscSignOut />
            <Text>サインアウト</Text>
          </HStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
