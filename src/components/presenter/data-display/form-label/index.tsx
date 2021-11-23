import Typography from "components/presenter/general/typography";
import { ReactNode } from "react";

type DOMProps = {
  children: ReactNode;
};

export const DOM = ({ children }: DOMProps): JSX.Element => (
  <Typography variant="body2">{children}</Typography>
);

type Props = {} & DOMProps;

const FormLabel = (props: Props): JSX.Element => {
  return <DOM {...props} />;
};

export default FormLabel;
