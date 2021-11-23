import { MouseEvent, ReactNode } from "react";
import styles from "./index.module.css";

type DOMProps = {
  children: ReactNode;
  color?: "default" | "primary" | "secondary" | "danger";
  size?: "large" | "medium" | "small";
  isFullWidth?: boolean;
  isDisabled?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const DOM = ({
  children,
  color = "default",
  size = "medium",
  isFullWidth = false,
  isDisabled = false,
  onClick,
}: DOMProps) => (
  <button
    className={`${[color, size].map((v) => styles[v]).join(" ")} ${
      isFullWidth ? styles["full-width"] : ""
    } ${isDisabled ? styles["disabled"] : ""}`}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </button>
);

type Props = DOMProps;

const Button = (props: Props) => {
  return <DOM {...props} />;
};

export default Button;
