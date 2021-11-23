import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DOM } from ".";

export default {
  title: "general/typography",
  component: DOM,
} as ComponentMeta<typeof DOM>;

const TemplateStory: ComponentStory<typeof DOM> = (props) => <DOM {...props} />;

export const Default = TemplateStory.bind({});
Default.args = {
  children: "default typography",
};

export const H1 = TemplateStory.bind({});
H1.args = {
  children: "H1 typography",
  variant: "h1",
};

export const H2 = TemplateStory.bind({});
H2.args = {
  children: "H2",
  variant: "h2",
};

export const H3 = TemplateStory.bind({});
H3.args = {
  children: "H3",
  variant: "h3",
};

export const H4 = TemplateStory.bind({});
H4.args = {
  children: "H4",
  variant: "h4",
};

export const H5 = TemplateStory.bind({});
H5.args = {
  children: "H5",
  variant: "h5",
};

export const H6 = TemplateStory.bind({});
H6.args = {
  children: "H6",
  variant: "h6",
};

export const Subtitle1 = TemplateStory.bind({});
Subtitle1.args = {
  children: "Subtitle1",
  variant: "subtitle1",
};

export const Subtitle2 = TemplateStory.bind({});
Subtitle2.args = {
  children: "Subtitle2",
  variant: "subtitle2",
};

export const Body2 = TemplateStory.bind({});
Body2.args = {
  children: "Body2",
  variant: "body2",
};
