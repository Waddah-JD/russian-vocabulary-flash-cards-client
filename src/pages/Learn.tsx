import { Button, styled } from "@mui/material";
import { learnWords } from "api/words";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import LearnWord from "components/Word/LearnWord";
import useFetch from "hooks/useFetch";
import { useState } from "react";
import { Word } from "types/words";

type PrevNextPagerProps = {
  items: Word[] | null;
};

function Learn(): JSX.Element {
  // TODO add a selector for batch number
  const { data: words, error, loading } = useFetch<Word[]>(() => learnWords(10), { triggerOnMount: true });

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
      <h2>Learn</h2>

      <PrevNextPager items={words} />
    </ProtectedRouteLayout>
  );
}

function PrevNextPager(props: PrevNextPagerProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);

  function moveToPreviousPage(): void {
    setCurrentPage((it) => it - 1);
  }
  function moveToNextPage(): void {
    setCurrentPage((it) => it + 1);
  }

  if (!props.items || props.items.length === 0) return <div>NO RESULTS</div>; // TODO

  return (
    <div>
      <LearnWord details={props.items[currentPage]} />

      <PrevNextPagerControllerContainer>
        <Button size="small" variant="outlined" disabled={currentPage === 0} onClick={moveToPreviousPage}>
          prev
        </Button>
        <Button
          size="small"
          variant="outlined"
          disabled={currentPage === props.items.length - 1}
          onClick={moveToNextPage}
        >
          next
        </Button>
      </PrevNextPagerControllerContainer>
    </div>
  );
}

const PrevNextPagerControllerContainer = styled("div")(() => {
  return {
    margin: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: 10,
  };
});

export default Learn;
