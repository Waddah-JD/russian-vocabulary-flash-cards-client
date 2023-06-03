import { getWordDetails } from "api/words";
import FetchedDataContainer from "components/Layout/FetchedDataContainer";
import WordDetails from "components/Word/Word";
import useFetch from "hooks/useFetch";
import { useParams } from "react-router-dom";
import { EnglishTranslation as WordPage, Word } from "types/words";

function WordPage(): JSX.Element {
  const { id } = useParams();

  if (!id) return <></>; // TODO

  const { loading, error, data } = useFetch<Word>((): Promise<Word> => getWordDetails(id), {
    deps: [id],
    triggerOnMount: true,
  });

  return (
    <FetchedDataContainer loading={loading} error={error}>
      {data ? <WordDetails details={data} /> : <div>No results</div>}
    </FetchedDataContainer>
  );
}

export default WordPage;
