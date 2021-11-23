import Typography from "components/presenter/general/typography";
import { ReactNode } from "react";
import styles from "./index.module.css";

type DOMProps = {
  children: ReactNode;
  count: number;
  label: string;
};

export const DOM = ({ children, count, label }: DOMProps): JSX.Element => (
  <div className={styles["card"]}>
    <div>{children}</div>
    <div className="info">
      <Typography variant="h4">{count.toLocaleString()}</Typography>
      <div className={styles["label"]}>{label}</div>
    </div>
  </div>
);

type Props = {} & DOMProps;

const DashboardCard = (props: Props): JSX.Element => {
  return <DOM {...props} />;
};

export default DashboardCard;
