import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { shouldForwardProp } from "utils/mui";

type Props = { centered?: boolean; message?: string | null };

const Container = styled("div", { shouldForwardProp: (prop) => shouldForwardProp<Props>(["centered"], prop) })<
  Pick<Props, "centered">
>(({ centered }) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: centered ? "center" : "flex-start",
    alignItems: "center",
    gap: "8px",
  };
});

function LoadingIndicator(props: Props): JSX.Element {
  return (
    <Container centered={props.centered}>
      <CircularProgress size={30} />
      {props.message && <p>{props.message}</p>}
    </Container>
  );
}

export default LoadingIndicator;
