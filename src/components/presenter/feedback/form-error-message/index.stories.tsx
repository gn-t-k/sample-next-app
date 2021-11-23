import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DOM } from ".";

export default {
  title: "feedback/form-error-message",
  component: DOM,
} as ComponentMeta<typeof DOM>;

const TemplateStory: ComponentStory<typeof DOM> = (props) => <DOM {...props} />;

export const Default = TemplateStory.bind({});
Default.args = {
  children: "error message",
};
