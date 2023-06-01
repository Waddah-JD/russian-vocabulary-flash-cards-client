import { getWordDetails } from "api/words";
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

  if (loading) {
    // TODO
    return <p>Loading...</p>;
  }

  if (error) {
    // TODO
    return <p>Something went wrong!</p>;
  }

  return data ? <WordDetails details={data} /> : <div>No results</div>;
}

export default WordPage;
