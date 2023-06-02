import { getPracticeWords } from "api/user-words";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import PracticeWordDetails from "components/Word/PracticeWord";
import useFetch from "hooks/useFetch";
import { useState } from "react";
import { PracticeWord, Word } from "types/words";

type Props = {
  items: Word[] | null;
};

function Practice(): JSX.Element {
  // TODO add a selector for batch number
  const { data, error, loading } = useFetch<PracticeWord[]>(() => getPracticeWords(10), { triggerOnMount: true });

  if (loading) {
    // TODO
    return <p>Loading..</p>;
  }

  if (error) {
    // TODO
    return <p>ERROR!</p>;
  }

  return (
    <ProtectedRouteLayout>
      <h2>Practice</h2>
      <NextOnlyPager items={data?.map((it) => it.word) || []} />
    </ProtectedRouteLayout>
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
        <PracticeWordDetails details={props.items[currentPage]} moveToNextPage={moveToNextPage} />
      ) : (
        <div>No more results</div> //TODO
      )}
    </div>
  );
}

export default Practice;
