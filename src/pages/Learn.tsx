import { learnWords } from "api/words";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import WordToLearn from "components/Word/WordToLearn";
import { useEffect, useState } from "react";
import { Word } from "types/words";

function Learn(): JSX.Element {
  const [words, setWords] = useState<Word[]>([]);

  function handleFetchLearnWords(): void {
    async function fetchLearnWords(): Promise<void> {
      const results = await learnWords(10); // TODO
      setWords(results);
    }

    fetchLearnWords();
  }

  useEffect(() => {
    handleFetchLearnWords();
  }, []);

  return (
    <ProtectedRouteLayout>
      <h2>Learn</h2>
      {words.length > 0 ? (
        <div>
          {words.map((data) => {
            return <WordToLearn key={data.id} details={data} />;
          })}
        </div>
      ) : (
        <div>NO RESULTS</div> // TODO
      )}
    </ProtectedRouteLayout>
  );
}

export default Learn;
