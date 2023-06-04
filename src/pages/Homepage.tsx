import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";

function Homepage(): JSX.Element {
  return (
    <div>
      <Alert severity="info">
        <AlertTitle>Welcome to Russian Vocabulary Flashcards</AlertTitle>
        <p>
          This page is kind of a placeholder, soon it will be used for some features that are currently being developed,
          so nothing to see here yet, meanwhile you can use this app&apos;s main features:{" "}
          <Link to="/learn">Learn</Link> or <Link to="/practice">Practice</Link>{" "}
        </p>
      </Alert>
    </div>
  );
}

export default Homepage;
