import { addWordToUserCollection } from "api/user-words";
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
  const [note, setNote] = useState("");

  function handleSetNote(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setNote(e.target.value);
  }
  async function handleAddWordToUserCollection(): Promise<void> {
    if (note) {
      await addWordToUserCollection(props.id, note);
    }
  }
  return (
    <form>
      <textarea value={note} onChange={handleSetNote} />
      <button type="button" onClick={handleAddWordToUserCollection}>
        Add
      </button>
    </form>
  );
}

function WordToLearn(props: Props): JSX.Element {
  return (
    <>
      <WordDetails details={props.details} />
      <AddToUserCollectionForm id={props.details.id} />
    </>
  );
}

export default WordToLearn;
