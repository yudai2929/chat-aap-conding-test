import React from "react"
import { Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from "@chakra-ui/react"
import { ChatRoom } from "../../../../../entities/ChatRoom"
import { ChatRoomCardList } from "../CardList/ChatRoomCardList"

interface Props {
  allRooms: ChatRoom[]
  myRooms: ChatRoom[]
  joinRoom: (roomId: string) => void
  leaveRoom: (roomId: string) => void
}
export const ChatRoomTabs = ({ allRooms, myRooms, joinRoom, leaveRoom }: Props) => {
  return (
    <Tabs w="full">
      <TabList>
        <ChatRoomTab>全てのルーム</ChatRoomTab>
        <ChatRoomTab>マイルーム</ChatRoomTab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ChatRoomCardList chatRooms={allRooms} joinRoom={joinRoom} leaveRoom={leaveRoom} />
        </TabPanel>
        <TabPanel>
          <ChatRoomCardList chatRooms={myRooms} joinRoom={joinRoom} leaveRoom={leaveRoom} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

interface ChatRoomTabProps {
  children: React.ReactNode
}
const ChatRoomTab = ({ children }: ChatRoomTabProps) => {
  return <Tab _selected={{ color: "primary", borderColor: "primary" }}>{children}</Tab>
}
