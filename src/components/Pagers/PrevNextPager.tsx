import { useState } from "react";

type Props<T> = {
  data: T[] | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageView: (props: any) => JSX.Element;
};

type PrevNextPagerControllerProps = {
  moveToPreviousPage: () => void;
  moveToPreviousPageIsDisabled: boolean;
  moveToNextPage: () => void;
  moveToNextPageIsDisabled: boolean;
};

function PrevNextPager<T>(props: Props<T>): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  const PageView = props.pageView;

  function moveToPreviousPage(): void {
    setCurrentPage((it) => it - 1);
  }
  function moveToNextPage(): void {
    setCurrentPage((it) => it + 1);
  }

  if (!props.data || props.data.length === 0) return <div>NO RESULTS</div>; // TODO

  return (
    <div>
      <PageView details={props.data[currentPage]} />
      <PrevNextPagerController
        moveToPreviousPageIsDisabled={currentPage === 0}
        moveToPreviousPage={moveToPreviousPage}
        moveToNextPageIsDisabled={currentPage === props.data.length - 1}
        moveToNextPage={moveToNextPage}
      />
    </div>
  );
}

function PrevNextPagerController(props: PrevNextPagerControllerProps): JSX.Element {
  return (
    <div>
      <button disabled={props.moveToPreviousPageIsDisabled} onClick={props.moveToPreviousPage}>
        prev
      </button>
      <button disabled={props.moveToNextPageIsDisabled} onClick={props.moveToNextPage}>
        next
      </button>
    </div>
  );
}

export default PrevNextPager;
