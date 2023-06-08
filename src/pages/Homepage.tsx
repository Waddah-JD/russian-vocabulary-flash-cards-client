import { Alert, AlertTitle, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Homepage(): JSX.Element {
  return (
    <div>
      <Alert severity="info">
        <AlertTitle>Welcome to Russian Vocabulary Flashcards</AlertTitle>
        <p>
          The ~20k Russian words that are available throughout this app are parsed from different resources, including
          (but not limited to):{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            href="http://dict.ruslang.ru/freq.php?act=show&dic=freq_freq&title=%D7%E0%F1%F2%EE%F2%ED%FB%E9%20%F1%EF%E8%F1%EE%EA%20%EB%E5%EC%EC"
          >
            Frequency List
          </Link>{" "}
          and{" "}
          <Link target="_blank" rel="noreferrer" href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page">
            Wiktionary
          </Link>
        </p>
        <p>
          The homepage is kind of a placeholder, soon it will be used for some features that are currently being
          developed, so nothing to see here yet, meanwhile you can use this app&apos;s main features:{" "}
          <Link to="/learn" component={RouterLink}>
            Learn
          </Link>{" "}
          or{" "}
          <Link to="/practice" component={RouterLink}>
            Practice
          </Link>{" "}
          or use the search functionality to look for a specific word either in Russian or English
        </p>
      </Alert>
    </div>
  );
}

export default Homepage;
