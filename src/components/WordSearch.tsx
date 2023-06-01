import { searchWords } from "api/words";
import { useNavigate } from "react-router-dom";
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
        const russianWordsSearchResult = await searchWords(searchTerm);
        if (!russianWordsSearchResult?.data) return [];
        return russianWordsSearchResult.data.map(({ id, word }) => {
          return {
            id: id,
            label: word,
            onClick: (): void => navigate(`/words/${id}`),
          };
        });
      }}
    />
  );
}
export default WordSearch;
