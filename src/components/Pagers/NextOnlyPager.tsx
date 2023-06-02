import { useState } from "react";

type Props<T> = {
  items: T[] | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemView: (props: any) => JSX.Element;
};

function NextOnlyPager<T>(props: Props<T>): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  const ItemView = props.itemView;

  function moveToNextPage(): void {
    setCurrentPage((it) => it + 1);
  }

  if (!props.items || props.items.length === 0) return <div>NO RESULTS</div>; // TODO

  return (
    <div>
      {currentPage < props.items.length ? (
        <ItemView details={props.items[currentPage]} moveToNextPage={moveToNextPage} />
      ) : (
        <div>No more results</div> //TODO
      )}
    </div>
  );
}

export default NextOnlyPager;
