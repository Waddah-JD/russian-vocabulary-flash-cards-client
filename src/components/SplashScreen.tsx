import { CircularProgress, styled } from "@mui/material";

const Container = styled("div")(() => {
  return {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
});

function SplashScreen(): JSX.Element {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
}

export default SplashScreen;
