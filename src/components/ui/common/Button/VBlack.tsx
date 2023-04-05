import { Button } from "@chakra-ui/react"
import type { ButtonProps } from "@chakra-ui/react"

export const ButtonVBlack = ({ children, ...props }: ButtonProps) => {
  return (
    <Button {...props} borderRadius={"sm"} color={"black"} bgColor={"white"} border={"1px solid"}>
      {children}
    </Button>
  )
}
