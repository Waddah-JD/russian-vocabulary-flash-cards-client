import { Button, styled } from "@mui/material";
import { submitPracticeWordResult } from "api/user-words";
import useFetch from "hooks/useFetch";
import { PracticeWord, Word } from "types/words";

import WordDetails from "./Word";

type Props = {
  details: Word;
  moveToNextPage: () => void;
};

type SubmitPracticeResultFormProps = {
  id: Word["id"];
  moveToNextPage: Props["moveToNextPage"];
};

const PracticeResultFormContainer = styled("div")(() => {
  return {
    margin: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: 10,
  };
});

function SubmitPracticeResultForm(props: SubmitPracticeResultFormProps): JSX.Element {
  const {
    loading: loadingSuccess,
    error: errorSuccess,
    trigger: triggerSuccess,
  } = useFetch<void>(() => submitPracticeWordResult(props.id, true));
  const {
    loading: loadingFail,
    error: errorFail,
    trigger: triggerFail,
  } = useFetch<void>(() => submitPracticeWordResult(props.id, false));

  const loading = loadingSuccess || loadingFail;
  const error = errorSuccess || errorFail;

  async function submitSuccessPractice(): Promise<void> {
    await triggerSuccess();
    props.moveToNextPage();
  }

  async function submitFailedPractice(): Promise<void> {
    await triggerFail();
    props.moveToNextPage();
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <PracticeResultFormContainer>
      <Button variant="outlined" size="small" type="button" onClick={submitFailedPractice}>
        Fail
      </Button>
      <Button variant="outlined" size="small" type="button" onClick={submitSuccessPractice}>
        Success
      </Button>
    </PracticeResultFormContainer>
  );
}

function PracticeWord(props: Props): JSX.Element {
  return (
    <>
      <WordDetails details={props.details} />
      <SubmitPracticeResultForm id={props.details.id} moveToNextPage={props.moveToNextPage} />
    </>
  );
}

export default PracticeWord;
