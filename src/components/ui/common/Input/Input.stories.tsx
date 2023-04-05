import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Input } from "./Input"

export default {
  title: "ui/common/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Input>

export const Default: ComponentStory<typeof Input> = args => <Input />
