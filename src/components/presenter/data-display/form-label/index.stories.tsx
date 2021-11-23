import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DOM } from ".";

export default {
  title: "dataDisplay/form-label",
  component: DOM,
} as ComponentMeta<typeof DOM>;

const TemplateStory: ComponentStory<typeof DOM> = (props) => <DOM {...props} />;

export const Default = TemplateStory.bind({});
Default.args = {
  children: "form label",
};
