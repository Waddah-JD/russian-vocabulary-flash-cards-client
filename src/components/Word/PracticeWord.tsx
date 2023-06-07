import { Button, styled } from "@mui/material";
import { submitPracticeWordResult } from "api/user-words";
import AddToUserCollectionForm from "components/Forms/AddWordToCollection";
import FetchedDataContainer from "components/Layout/FetchedDataContainer";
import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
import { PracticeWord, Word } from "types/words";

import WordDetails from "./Word";

type Props = {
  item: PracticeWord;
  moveToNextPage: () => void;
};

type SubmitPracticeResultFormProps = {
  id: Word["id"];
  moveToNextPage: Props["moveToNextPage"];
};

type AddOrUpdateNoteProps = {
  id: Word["id"];
  note?: string;
};

const PracticeResultFormContainer = styled("div")(() => {
  return {
    margin: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: 10,
  };
});

function SubmitPracticeResultForm(props: SubmitPracticeResultFormProps): JSX.Element {
  const {
    loading: loadingSuccess,
    error: errorSuccess,
    trigger: triggerSuccess,
  } = useFetch<void>(() => submitPracticeWordResult(props.id, true));
  const {
    loading: loadingFail,
    error: errorFail,
    trigger: triggerFail,
  } = useFetch<void>(() => submitPracticeWordResult(props.id, false));

  const loading = loadingSuccess || loadingFail;
  const error = errorSuccess || errorFail;

  async function submitSuccessPractice(): Promise<void> {
    await triggerSuccess();
    props.moveToNextPage();
  }

  async function submitFailedPractice(): Promise<void> {
    await triggerFail();
    props.moveToNextPage();
  }

  return (
    <FetchedDataContainer loading={loading} error={error}>
      <PracticeResultFormContainer>
        <Button variant="outlined" size="small" type="button" onClick={submitFailedPractice}>
          Fail
        </Button>
        <Button variant="outlined" size="small" type="button" onClick={submitSuccessPractice}>
          Success
        </Button>
      </PracticeResultFormContainer>
    </FetchedDataContainer>
  );
}

function PracticeWord(props: Props): JSX.Element {
  return (
    <>
      <WordDetails details={props.item.word} />
      <AddOrUpdateNote id={props.item.word.id} note={props.item.notes} />
      <SubmitPracticeResultForm id={props.item.word.id} moveToNextPage={props.moveToNextPage} />
    </>
  );
}

function AddOrUpdateNote(props: AddOrUpdateNoteProps): JSX.Element {
  const [note, setNote] = useState<string>(props.note || "");

  useEffect(() => {
    setNote(props.note || "");
  }, [props.note]);

  function handleSetNote(_: Word["id"], notes: string): void {
    setNote(notes);
  }

  return (
    <AddToUserCollectionForm
      id={props.id}
      note={note}
      setNote={handleSetNote}
      actionButtonLabel={props.note && "Update Note"}
    />
  );
}

export default PracticeWord;
