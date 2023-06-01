/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button, styled, TextField } from "@mui/material";
import { addWordToUserCollection } from "api/user-words";
import useFetch from "hooks/useFetch";
import { FormEvent, useState } from "react";
import { Word } from "types/words";

import WordDetails from "./Word";

type Props = {
  details: Word;
};

type AddToUserCollectionFormProps = {
  id: Word["id"];
};

const AddToUserCollectionFormContainer = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBlock: 10,
  };
});

const AddToUserCollectionFormTextField = styled(TextField)(() => {
  return {
    flexGrow: 1,
  };
});

function AddToUserCollectionForm(props: AddToUserCollectionFormProps): JSX.Element {
  const [notes, setNotes] = useState<string>();

  const { loading, error, done, trigger } = useFetch<void>(addWordToUserCollection, [props.id, notes]);

  function handleSetNote(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setNotes(e.target.value);
  }

  function handleAddToCollectionSubmit(e: FormEvent): void {
    e.preventDefault();
    trigger(props.id, notes);
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
    <AddToUserCollectionFormContainer sx={{ flexDirection: { xs: "column", sm: "row" } }}>
      <AddToUserCollectionFormTextField multiline label="Notes" value={notes} onChange={handleSetNote} />
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
      <AddToUserCollectionForm id={props.details.id} />
    </>
  );
}

export default LearnWord;
