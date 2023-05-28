import { submitPracticeWordResult } from "api/user-words";
import useFetch from "hooks/useFetch";
import { PracticeWord, Word } from "types/words";

import WordDetails from "./Word";

type Props = {
  word: Word;
};

type SubmitPracticeResultFormProps = {
  id: Word["id"];
};

function SubmitPracticeResultForm(props: SubmitPracticeResultFormProps): JSX.Element {
  // TODO fix useFetch shit show
  const {
    loading: trueCallLoading,
    error: trueCallError,
    done: trueCallDone,
    trigger: trueCallTrigger,
  } = useFetch<void>(submitPracticeWordResult, [props.id, true]);
  const {
    loading: falseCallLoading,
    error: falseCallError,
    done: falseCallDone,
    trigger: falseCallTrigger,
  } = useFetch<void>(submitPracticeWordResult, [props.id, false]);

  const loading = trueCallLoading || falseCallLoading;
  const error = trueCallError || falseCallError;
  const done = trueCallDone || falseCallDone;

  if (loading) {
    return <p style={{ color: "green" }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Something went wrong!</p>;
  }

  return done ? (
    <p>Submitted Successfully!</p>
  ) : (
    <div>
      <button type="button" onClick={trueCallTrigger}>
        Yas
      </button>

      <button type="button" onClick={falseCallTrigger}>
        Fail
      </button>
    </div>
  );
}

function PracticeWord(props: Props): JSX.Element {
  return (
    <>
      <WordDetails details={props.word} />
      <SubmitPracticeResultForm id={props.word.id} />
    </>
  );
}

export default PracticeWord;
