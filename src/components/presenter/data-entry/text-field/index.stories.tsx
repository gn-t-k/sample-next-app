import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { DOM } from ".";

export default {
  title: "data-entry/text-field",
  component: DOM,
} as ComponentMeta<typeof DOM>;

const TemplateStory: ComponentStory<typeof DOM> = (props) => <DOM {...props} />;

export const Default = TemplateStory.bind({});
Default.args = {
  label: "label",
  value: "value",
  onChange: () => {},
  isError: false,
};

export const Error = TemplateStory.bind({});
Error.args = {
  label: "label",
  value: "value",
  onChange: () => {},
  isError: true,
  helperText: "helper text",
};
