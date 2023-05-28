/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { addWordToUserCollection } from "api/user-words";
import useFetch from "hooks/useFetch";
import { useState } from "react";
import { Word } from "types/words";

import WordDetails from "./Word";

type Props = {
  details: Word;
};

type AddToUserCollectionFormProps = {
  id: Word["id"];
};

function AddToUserCollectionForm(props: AddToUserCollectionFormProps): JSX.Element {
  const [notes, setNotes] = useState<string>();

  const { loading, error, done, trigger } = useFetch<void>(addWordToUserCollection, [props.id, notes]);

  function handleSetNote(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setNotes(e.target.value);
  }

  if (loading) {
    return <p style={{ color: "green" }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Something went wrong!</p>;
  }

  return done ? (
    <p>Added Successfully!</p>
  ) : (
    <form>
      <textarea value={notes} onChange={handleSetNote} />
      <button type="button" onClick={() => trigger()}>
        Add
      </button>
    </form>
  );
}

function LearnWord(props: Props): JSX.Element {
  return (
    <>
      <WordDetails details={props.details} />
      <AddToUserCollectionForm id={props.details.id} />
    </>
  );
}

export default LearnWord;
