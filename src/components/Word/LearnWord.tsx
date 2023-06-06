import AddToUserCollectionForm from "components/Forms/AddWordToCollection";
import { Word } from "types/words";

import WordDetails from "./Word";

type Props = {
  details: Word;
  note: string;
  setNote: (id: Word["id"], notes: string) => void;
};

function LearnWord(props: Props): JSX.Element {
  return (
    <>
      <WordDetails details={props.details} />
      <AddToUserCollectionForm id={props.details.id} note={props.note} setNote={props.setNote} />
    </>
  );
}

export default LearnWord;
