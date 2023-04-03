import { Box, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { ButtonVPrimary } from "../../ui/common/Button/VPrimary";
import { useRouter } from "next/router";

export const Header = () => {
  return (
    <HStack
      px={8}
      py={2}
      boxShadow="md"
      height={"60px"}
      justifyContent={"space-between"}
    >
      <Heading color={"primary"}>Chat App</Heading>
      <ButtonVPrimary>ログイン</ButtonVPrimary>
    </HStack>
  );
};
