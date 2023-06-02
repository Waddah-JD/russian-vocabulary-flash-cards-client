import { Button, styled, TextField } from "@mui/material";
import { addWordToUserCollection } from "api/user-words";
import useFetch from "hooks/useFetch";
import { FormEvent } from "react";
import { Word } from "types/words";

import WordDetails from "./Word";

type Props = {
  details: Word;
  note: string;
  setNote: (id: Word["id"], notes: string) => void;
};

type AddToUserCollectionFormProps = {
  id: Word["id"];
  note: Props["note"];
  setNote: Props["setNote"];
};

const AddToUserCollectionFormContainer = styled("div")(({ theme }) => {
  return {
    display: "flex",
    gap: 10,
    marginBlock: 10,
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  };
});

const AddToUserCollectionFormTextField = styled(TextField)(() => {
  return {
    flexGrow: 1,
  };
});

function AddToUserCollectionForm(props: AddToUserCollectionFormProps): JSX.Element {
  const { loading, error, done, trigger } = useFetch<void>(() => addWordToUserCollection(props.id, props.note), {
    deps: [props.id],
  });

  function handleSetNote(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    props.setNote(props.id, e.target.value);
  }

  function handleAddToCollectionSubmit(e: FormEvent): void {
    e.preventDefault();
    trigger();
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return done ? (
    <p>Added Successfully!</p>
  ) : (
    <AddToUserCollectionFormContainer>
      <AddToUserCollectionFormTextField multiline label="Notes" value={props.note} onChange={handleSetNote} />
      <Button type="submit" size="small" variant="contained" onClick={handleAddToCollectionSubmit}>
        Add To Collection
      </Button>
    </AddToUserCollectionFormContainer>
  );
}

function LearnWord(props: Props): JSX.Element {
  return (
    <>
      <WordDetails details={props.details} />
      <AddToUserCollectionForm id={props.details.id} note={props.note} setNote={props.setNote} />
    </>
  );
}

export default LearnWord;
