import { Button, styled, TextField } from "@mui/material";
import { addWordToUserCollection } from "api/user-words";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import { FormEvent, useState } from "react";
import { Word } from "types/words";

import WordDetails from "./Word";

type Props = {
  details: Word;
};

type AddToUserCollectionFormProps = {
  id: Word["id"];
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
  const [notes, setNotes] = useState<string>();

  useEffect(() => {
    setNotes(undefined);
  }, [props.id]);

  const { loading, error, done, trigger } = useFetch<void>(() => addWordToUserCollection(props.id, notes), {
    deps: [props.id],
  });

  function handleSetNote(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setNotes(e.target.value);
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
