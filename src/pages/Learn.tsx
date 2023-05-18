import { fetchLearnWords } from "actions/words";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import WordDetails from "components/Word";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLearnWordsBatchSize, selectLearnWordsResults } from "selectors/learn";

function Learn(): JSX.Element {
  const dispatch = useDispatch();

  const batchSize = useSelector(selectLearnWordsBatchSize);
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
            return <WordDetails key={data.id} data={data} />;
          })}
        </div>
      ) : (
        <div>NO RESULTS</div> // TODO
      )}
    </ProtectedRouteLayout>
  );
}

export default Learn;
