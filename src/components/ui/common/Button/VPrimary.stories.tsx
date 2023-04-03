import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonVPrimary } from "./VPrimary";

export default {
  title: "ui/Button/VPrimary",
  component: ButtonVPrimary,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ButtonVPrimary>;

export const Default: ComponentStory<typeof ButtonVPrimary> = (args) => (
  <ButtonVPrimary>テスト</ButtonVPrimary>
);
