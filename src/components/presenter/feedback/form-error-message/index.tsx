import { ReactNode } from "react";
import styles from "./index.module.css";

type DOMProps = {
  children: ReactNode;
};

export const DOM = ({ children }: DOMProps): JSX.Element => (
  <p className={styles["error-message"]}>{children}</p>
);

type Props = {} & DOMProps;

const FormErrorMessage = (props: Props): JSX.Element => {
  return <DOM {...props} />;
};

export default FormErrorMessage;
