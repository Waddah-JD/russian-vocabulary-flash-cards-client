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
  const [notes, setNotes] = useState<string>();

  function handleSetNote(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setNotes(e.target.value);
  }
  async function handleAddWordToUserCollection(): Promise<void> {
    await addWordToUserCollection(props.id, notes);
  }
  return (
    <form>
      <textarea value={notes} onChange={handleSetNote} />
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
