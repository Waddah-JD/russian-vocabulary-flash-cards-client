import { Button, styled } from "@mui/material";
import { learnWords } from "api/words";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import LearnWord from "components/Word/LearnWord";
import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
import { Word } from "types/words";

type PrevNextPagerProps = {
  items: Word[] | null;
  notesMap: Record<Word["id"], string>;
  setNote: (id: Word["id"], notes: string) => void;
};

function Learn(): JSX.Element {
  const [notesMap, setNotesMap] = useState<Record<Word["id"], string>>({});
  // TODO add a selector for batch number
  const { data, error, loading } = useFetch<Word[]>(() => learnWords(10), { triggerOnMount: true });

  useEffect(() => {
    setNotesMap(() => {
      const hashMap: Record<Word["id"], string> = {};
      if (!data) return hashMap;
      for (const item of data) {
        hashMap[item.id] = "";
      }
      return hashMap;
    });
  }, [data]);

  function setNote(id: Word["id"], note: string): void {
    setNotesMap((prev) => {
      return { ...prev, [id]: note };
    });
  }

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

      <PrevNextPager items={data} notesMap={notesMap} setNote={setNote} />
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

  const wordDetails = props.items[currentPage];
  const wordId = wordDetails.id;
  const wordNote = props.notesMap[wordId] || "";

  return (
    <div>
      <LearnWord details={wordDetails} note={wordNote} setNote={props.setNote} />

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
