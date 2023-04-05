import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ButtonVBlack } from "./VBlack"

export default {
  title: "ui/common/Button/VBlack",
  component: ButtonVBlack,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ButtonVBlack>

export const Default: ComponentStory<typeof ButtonVBlack> = args => <ButtonVBlack>テスト</ButtonVBlack>
