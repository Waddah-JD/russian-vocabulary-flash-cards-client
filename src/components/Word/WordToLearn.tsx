import { addToCollectionNoteFormValueChanged, addToCollectionNoteFormValueSubmitted } from "actions/words";
import { useDispatch, useSelector } from "react-redux";
import { selectWordNotes } from "selectors/learn";
import { Word } from "types/words";

import WordDetails from "./Word";

type Props = {
  details: Word;
};

type AddToUserCollectionFormProps = {
  id: Word["id"];
};

function AddToUserCollectionForm(props: AddToUserCollectionFormProps): JSX.Element {
  const dispatch = useDispatch();

  const wordNotes = useSelector((state) => selectWordNotes(state, props.id));

  function handleChangeAddToCollectionNoteValue(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    dispatch(addToCollectionNoteFormValueChanged(props.id, e.target.value));
  }
  function handleSubmitAddToCollectionForm(): void {
    if (wordNotes) {
      dispatch(addToCollectionNoteFormValueSubmitted(props.id, wordNotes));
    }
  }
  return (
    <form>
      <textarea value={wordNotes} onChange={handleChangeAddToCollectionNoteValue} />
      <button type="button" onClick={handleSubmitAddToCollectionForm}>
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
