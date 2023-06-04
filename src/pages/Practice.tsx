import { getPracticeWords } from "api/user-words";
import FetchedDataContainer from "components/Layout/FetchedDataContainer";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import PracticeWordDetails from "components/Word/PracticeWord";
import useFetch from "hooks/useFetch";
import { useState } from "react";
import { PracticeWord } from "types/words";

type Props = {
  items: PracticeWord[] | null;
};

function Practice(): JSX.Element {
  // TODO add a selector for batch number
  const { data, error, loading } = useFetch<PracticeWord[]>(() => getPracticeWords(10), { triggerOnMount: true });

  return (
    <FetchedDataContainer loading={loading} error={error}>
      <ProtectedRouteLayout>
        <h2>Practice</h2>
        <NextOnlyPager items={data?.map(({ word, notes }) => ({ word, notes })) || []} />
      </ProtectedRouteLayout>
    </FetchedDataContainer>
  );
}

function NextOnlyPager(props: Props): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);

  function moveToNextPage(): void {
    setCurrentPage((it) => it + 1);
  }

  if (!props.items || props.items.length === 0) return <div>NO RESULTS</div>; // TODO

  return (
    <div>
      {currentPage < props.items.length ? (
        <PracticeWordDetails item={props.items[currentPage]} moveToNextPage={moveToNextPage} />
      ) : (
        <div>No more results</div> //TODO
      )}
    </div>
  );
}

export default Practice;
