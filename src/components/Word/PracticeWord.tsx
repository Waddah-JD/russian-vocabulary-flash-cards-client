// import { submitPracticeWordResult } from "api/user-words";
// import useFetch from "hooks/useFetch";
// import { useState } from "react";
import { PracticeWord, Word } from "types/words";

import WordDetails from "./Word";

type Props = {
  word: Word;
};

type SubmitPracticeResultFormProps = {
  id: Word["id"];
};

function SubmitPracticeResultForm(props: SubmitPracticeResultFormProps): JSX.Element {
  // const [successful, setSuccessful] = useState<boolean>();

  // const { loading, error, done, trigger } = useFetch<void>(() => submitPracticeWordResult(props.id, successful));

  // function handleSetSuccessful(isSuccessful: boolean): void {
  //   setSuccessful(isSuccessful);
  // }

  // if (loading) {
  //   return <p style={{ color: "green" }}>Loading...</p>;
  // }

  // if (error) {
  //   return <p style={{ color: "red" }}>Something went wrong!</p>;
  // }

  const done = false;
  return done ? (
    <p>Submitted Successfully!</p>
  ) : (
    <div>
      {/* <button type="button" onClick={trigger}>
        Yas
      </button>

      <button type="button" onClick={trigger}>
        Fail
      </button> */}
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
