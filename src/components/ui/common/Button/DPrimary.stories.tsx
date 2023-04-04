import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ButtonDPrimary } from "./DPrimary"

export default {
  title: "ui/common/Button/DPrimary",
  component: ButtonDPrimary,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ButtonDPrimary>

export const Default: ComponentStory<typeof ButtonDPrimary> = args => <ButtonDPrimary>テスト</ButtonDPrimary>
