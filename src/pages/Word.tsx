import { Alert } from "@mui/material";
import { getWordDetails } from "api/words";
import AddToUserCollectionForm from "components/Forms/AddWordToCollection";
import FetchedDataContainer from "components/Layout/FetchedDataContainer";
import ErrorIndicator from "components/UiKit/ErrorIndicator";
import WordDetails from "components/Word/Word";
import { AuthContext } from "contexts/Auth";
import useFetch from "hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EnglishTranslation as WordPage, Word, WordInCollection } from "types/words";
import { isApiError, isNumericString } from "utils/types";

type AddWordToUserCollectionProps = {
  id: Word["id"];
  note: string;
};

function WordPage(): JSX.Element {
  const { id } = useParams();

  const { userIsAuthenticated } = useContext(AuthContext);

  // this won't be triggered since there is a redirect to homepage for such path
  if (!id) return <ErrorIndicator message="Missing Word ID param" />;

  if (!isNumericString(id)) return <ErrorIndicator message={`The value "${id}" is not a valid Word ID`} />;

  const { loading, error, data } = useFetch<Word | WordInCollection>((): Promise<Word> => getWordDetails(id), {
    deps: [id],
    triggerOnMount: true,
  });

  return (
    <FetchedDataContainer loading={loading} error={error} errorOptions={{ errorMapperFn: mapErrors }}>
      {data ? (
        <>
          <WordDetails details={data} />
          {userIsAuthenticated && (
            <AddWordToUserCollection
              id={data.id}
              note={data && "collectionEntry" in data ? data.collectionEntry?.notes : ""}
            />
          )}
        </>
      ) : (
        <Alert severity="warning">No results were found!</Alert>
      )}
    </FetchedDataContainer>
  );
}

function AddWordToUserCollection(props: AddWordToUserCollectionProps): JSX.Element {
  const [note, setNote] = useState<string>(props.note || "");

  useEffect(() => {
    setNote(props.note);
  }, [props.id, props.note, props.note]);

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

function mapErrors(error: unknown): string | null {
  if (!isApiError(error)) return null;

  const { message } = error.response.data;

  switch (message) {
    case "Entity Not found":
      return "Couldn't find WORD by provided ID, please make sure it exists";
    default:
      return null;
  }
}

export default WordPage;
