import React from "react"
import { Input as CInput, InputProps, forwardRef } from "@chakra-ui/react"

export const Input = forwardRef<InputProps, "input">((props, ref) => {
  return <CInput {...props} focusBorderColor={"primary"} rounded={"sm"} ref={ref} />
})
