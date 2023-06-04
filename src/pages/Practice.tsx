import { Alert, Button } from "@mui/material";
import { getPracticeWords } from "api/user-words";
import FetchedDataContainer from "components/Layout/FetchedDataContainer";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import PracticeWordDetails from "components/Word/PracticeWord";
import useFetch from "hooks/useFetch";
import { useState } from "react";
import { PracticeWord } from "types/words";

type Props = {
  items: PracticeWord[] | null;
  fetchAnotherBatch: () => void;
};

function Practice(): JSX.Element {
  // TODO add a selector for batch number
  const { data, error, loading, trigger } = useFetch<PracticeWord[]>(() => getPracticeWords(10), {
    triggerOnMount: true,
  });

  return (
    <FetchedDataContainer loading={loading} error={error}>
      <ProtectedRouteLayout>
        <h2>Practice</h2>
        <NextOnlyPager items={data?.map(({ word, notes }) => ({ word, notes })) || []} fetchAnotherBatch={trigger} />
      </ProtectedRouteLayout>
    </FetchedDataContainer>
  );
}

function NextOnlyPager(props: Props): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);

  function moveToNextPage(): void {
    setCurrentPage((it) => it + 1);
  }

  if (!props.items || props.items.length === 0) return <Alert severity="warning">No results were found!</Alert>;

  return (
    <div>
      {currentPage < props.items.length ? (
        <PracticeWordDetails item={props.items[currentPage]} moveToNextPage={moveToNextPage} />
      ) : (
        <Button onClick={props.fetchAnotherBatch}>Practice More</Button>
      )}
    </div>
  );
}

export default Practice;
