import { Button } from "@chakra-ui/react";
import type { ButtonProps } from "@chakra-ui/react";

export const ButtonVPrimary = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      borderRadius={"sm"}
      color={"primary"}
      bgColor={"white"}
      border={"1px solid"}
      _hover={{ color: "primaryDark" }}
    >
      {children}
    </Button>
  );
};
