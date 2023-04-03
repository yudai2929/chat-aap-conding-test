import { Button } from "@chakra-ui/react";
import type { ButtonProps } from "@chakra-ui/react";

export const ButtonDPrimary = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      borderRadius={"sm"}
      color={"white"}
      bgColor={"primary"}
      _hover={{ bgColor: "primaryDark" }}
    >
      {children}
    </Button>
  );
};
