import { useState } from "react";

type Props<T> = {
  data: T[] | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageView: (props: any) => JSX.Element;
};

function NextOnlyPager<T>(props: Props<T>): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  const PageView = props.pageView;

  function moveToNextPage(): void {
    setCurrentPage((it) => it + 1);
  }

  if (!props.data || props.data.length === 0) return <div>NO RESULTS</div>; // TODO

  return (
    <div>
      {currentPage < props.data.length ? (
        <PageView details={props.data[currentPage]} moveToNextPage={moveToNextPage} />
      ) : (
        <div>No more results</div> //TODO
      )}
    </div>
  );
}

export default NextOnlyPager;
