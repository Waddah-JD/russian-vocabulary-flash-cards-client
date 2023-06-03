import { Alert } from "@mui/material";
import { ReactNode } from "react";

type Props = { message: ReactNode };

function ErrorIndicator(props: Props): JSX.Element {
  return (
    <div>
      <Alert severity="error">{props.message}</Alert>
    </div>
  );
}

export default ErrorIndicator;
