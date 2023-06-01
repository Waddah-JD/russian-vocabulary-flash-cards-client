import { searchEnglishTranslation } from "api/english-translations";
import { searchWords } from "api/words";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Word } from "types/words";

import SearchBox from "./UIKit/SearchBox";

type WordSearchResult = Pick<Word, "id"> & {
  label: string;
  onClick: () => void;
};

function WordSearch(): JSX.Element {
  const navigate = useNavigate();
  return (
    <SearchBox<WordSearchResult>
      throttleRate={1000}
      searchFunction={async function (searchTerm: string): Promise<WordSearchResult[]> {
        const isEnglish = searchTerm.split("").some((it) => /^[A-Za-z]*$/.test(it));
        const searchFunction = isEnglish ? handleEnglishWordSearch : handleRussianWordSearch;
        return searchFunction(searchTerm, navigate);
      }}
    />
  );
}

async function handleRussianWordSearch(
  searchTerm: string,
  navigationFn: NavigateFunction
): Promise<WordSearchResult[]> {
  const result = await searchWords(searchTerm);
  if (!result?.data) return [];
  return result.data.map(({ id, word }) => {
    return {
      id: id,
      label: word,
      onClick: (): void => navigationFn(`/words/${id}`),
    };
  });
}

async function handleEnglishWordSearch(
  searchTerm: string,
  navigationFn: NavigateFunction
): Promise<WordSearchResult[]> {
  const result = await searchEnglishTranslation(searchTerm);
  if (!result?.data) return [];
  return result.data.map(({ id, translation }) => {
    return {
      id: id,
      label: translation,
      onClick: (): void => navigationFn(`/english-translations/${id}`),
    };
  });
}

export default WordSearch;