import { fetchLearnWords } from "actions/words";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import WordToLearn from "components/Word/WordToLearn";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLearnBatchSize, selectLearnWordsResults } from "selectors/learn";

function Learn(): JSX.Element {
  const dispatch = useDispatch();

  const batchSize = useSelector(selectLearnBatchSize);
  const results = useSelector(selectLearnWordsResults);

  function handleFetchLearnWords(): void {
    dispatch(fetchLearnWords(batchSize));
  }

  useEffect(() => {
    handleFetchLearnWords();
  }, []);

  return (
    <ProtectedRouteLayout>
      <h2>Learn</h2>
      {results.length > 0 ? (
        <div>
          {results.map((data) => {
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
