import { getWordDetails } from "api/words";
import FetchedDataContainer from "components/Layout/FetchedDataContainer";
import ErrorIndicator from "components/UiKit/ErrorIndicator";
import WordDetails from "components/Word/Word";
import useFetch from "hooks/useFetch";
import { useParams } from "react-router-dom";
import { EnglishTranslation as WordPage, Word } from "types/words";
import { isApiError, isNumericString } from "utils/types";

function WordPage(): JSX.Element {
  const { id } = useParams();

  // this won't be triggered since there is a redirect to homepage for such path
  if (!id) return <ErrorIndicator message="Missing Word ID param" />;

  if (!isNumericString(id)) return <ErrorIndicator message={`The value "${id}" is not a valid Word ID`} />;

  const { loading, error, data } = useFetch<Word>((): Promise<Word> => getWordDetails(id), {
    deps: [id],
    triggerOnMount: true,
  });

  return (
    <FetchedDataContainer loading={loading} error={error} errorOptions={{ errorMapperFn: mapErrors }}>
      {data ? <WordDetails details={data} /> : <div>No results</div>}
    </FetchedDataContainer>
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
