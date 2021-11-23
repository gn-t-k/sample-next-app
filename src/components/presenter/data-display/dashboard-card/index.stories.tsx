import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DOM } from ".";

export default {
  title: "data-display/dashboard-card",
  component: DOM,
} as ComponentMeta<typeof DOM>;

const TemplateStory: ComponentStory<typeof DOM> = (props) => <DOM {...props} />;

export const Default = TemplateStory.bind({});
const Icon = () => (
  <div
    style={{
      padding: "0.75rem",
      borderRadius: "9999px",
      backgroundColor: "blue",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "1.5rem", width: "1.5rem", color: "white" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  </div>
);
Default.args = {
  children: Icon(),
  count: 1234,
  label: "label",
};
