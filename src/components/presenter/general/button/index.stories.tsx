import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { DOM } from ".";

export default {
  title: "General/Button",
  component: DOM,
} as ComponentMeta<typeof DOM>;

const TemplateStory: ComponentStory<typeof DOM> = (props) => <DOM {...props} />;

export const Default = TemplateStory.bind({});
Default.args = {
  children: "default",
  onClick: action("clicked"),
};

export const Primary = TemplateStory.bind({});
Primary.args = {
  children: "primary",
  color: "primary",
  onClick: action("clicked"),
};

export const Large = TemplateStory.bind({});
Large.args = {
  children: "large",
  size: "large",
  onClick: action("clicked"),
};

export const FullWidth = TemplateStory.bind({});
FullWidth.args = {
  children: "full width",
  isFullWidth: true,
  onClick: (_event) => action("clicked"),
};

export const Disabled = TemplateStory.bind({});
Disabled.args = {
  children: "disabled",
  isDisabled: true,
  onClick: (_event) => action("clicked"),
};
