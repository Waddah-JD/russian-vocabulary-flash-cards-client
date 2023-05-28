/* eslint-disable @typescript-eslint/explicit-function-return-type */
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
  const { loading, error, done, trigger } = useFetch<void>(submitPracticeWordResult);

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
      <button type="button" onClick={() => trigger(props.id, true)}>
        Yas
      </button>

      <button type="button" onClick={() => trigger(props.id, false)}>
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
