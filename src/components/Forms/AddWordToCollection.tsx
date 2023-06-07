import { Alert, Button, styled, TextField } from "@mui/material";
import { addWordToUserCollection } from "api/user-words";
import FetchedDataContainer from "components/Layout/FetchedDataContainer";
import useFetch from "hooks/useFetch";
import { FormEvent } from "react";
import { Word } from "types/words";

type Props = {
  id: Word["id"];
  note: string;
  setNote: (id: Word["id"], notes: string) => void;
  actionButtonLabel?: string;
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

function AddToUserCollectionForm(props: Props): JSX.Element {
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

  return (
    <FetchedDataContainer loading={loading} error={error}>
      {done ? (
        <Alert severity="success">Done!</Alert>
      ) : (
        <AddToUserCollectionFormContainer>
          <AddToUserCollectionFormTextField multiline label="Notes" value={props.note} onChange={handleSetNote} />
          <Button type="submit" size="small" variant="contained" onClick={handleAddToCollectionSubmit}>
            {props.actionButtonLabel || "Add To Collection"}
          </Button>
        </AddToUserCollectionFormContainer>
      )}
    </FetchedDataContainer>
  );
}

export default AddToUserCollectionForm;
