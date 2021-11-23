import FormLabel from "components/presenter/data-display/form-label";
import FormErrorMessage from "components/presenter/feedback/form-error-message";
import { HTMLInputTypeAttribute } from "react";
import styles from "./index.module.css";

type DOMProps = {
  label: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: (...args: unknown[]) => unknown;
  isError: boolean;
  helperText?: string;
};

export const DOM = ({
  label,
  type = "text",
  value,
  onChange,
  isError,
  helperText,
}: DOMProps): JSX.Element => (
  <label>
    <FormLabel>{label}</FormLabel>
    <input className={styles["text-field"]} {...{ type, value, onChange }} />
    {isError && helperText && (
      <div className={styles["helper-text"]}>
        <FormErrorMessage>{helperText}</FormErrorMessage>
      </div>
    )}
  </label>
);

type Props = {} & DOMProps;

const TextField = (props: Props): JSX.Element => {
  return <DOM {...props} />;
};

export default TextField;
