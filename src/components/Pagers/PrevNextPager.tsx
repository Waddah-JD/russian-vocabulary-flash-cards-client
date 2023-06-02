import { Button, styled } from "@mui/material";
import { useState } from "react";

type Props<T> = {
  items: T[] | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemView: (props: any) => JSX.Element;
};

type PrevNextPagerControllerProps = {
  moveToPreviousPage: () => void;
  moveToPreviousPageIsDisabled: boolean;
  moveToNextPage: () => void;
  moveToNextPageIsDisabled: boolean;
};

function PrevNextPager<T>(props: Props<T>): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  const ItemView = props.itemView;

  function moveToPreviousPage(): void {
    setCurrentPage((it) => it - 1);
  }
  function moveToNextPage(): void {
    setCurrentPage((it) => it + 1);
  }

  if (!props.items || props.items.length === 0) return <div>NO RESULTS</div>; // TODO

  return (
    <div>
      <ItemView details={props.items[currentPage]} />
      <PrevNextPagerController
        moveToPreviousPageIsDisabled={currentPage === 0}
        moveToPreviousPage={moveToPreviousPage}
        moveToNextPageIsDisabled={currentPage === props.items.length - 1}
        moveToNextPage={moveToNextPage}
      />
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

function PrevNextPagerController(props: PrevNextPagerControllerProps): JSX.Element {
  return (
    <PrevNextPagerControllerContainer>
      <Button
        size="small"
        variant="outlined"
        disabled={props.moveToPreviousPageIsDisabled}
        onClick={props.moveToPreviousPage}
      >
        prev
      </Button>
      <Button size="small" variant="outlined" disabled={props.moveToNextPageIsDisabled} onClick={props.moveToNextPage}>
        next
      </Button>
    </PrevNextPagerControllerContainer>
  );
}

export default PrevNextPager;
