import React from "react";
import { Input as CInput, InputProps } from "@chakra-ui/react";

export const Input = ({ ...props }: InputProps) => {
  return <CInput {...props} focusBorderColor={"primary"} />;
};
