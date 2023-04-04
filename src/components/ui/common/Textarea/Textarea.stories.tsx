import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Textarea } from "./Textarea"

export default {
  title: "ui/common/Textarea",
  component: Textarea,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Textarea>

export const Default: ComponentStory<typeof Textarea> = args => <Textarea />
