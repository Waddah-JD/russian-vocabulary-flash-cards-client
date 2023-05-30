import { Button } from "@mui/material";
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

function SubmitPracticeResultForm(props: SubmitPracticeResultFormProps): JSX.Element {
  const { loading, error, trigger } = useFetch<void>(submitPracticeWordResult);

  async function submitSuccessPractice(): Promise<void> {
    await trigger(props.id, true);
    props.moveToNextPage();
  }

  async function submitFailedPractice(): Promise<void> {
    await trigger(props.id, false);
    props.moveToNextPage();
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div>
      <Button variant="outlined" size="small" type="button" onClick={submitFailedPractice}>
        Fail
      </Button>
      <Button variant="outlined" size="small" type="button" onClick={submitSuccessPractice}>
        Success
      </Button>
    </div>
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
