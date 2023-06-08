import { CircularProgress, TextField } from "@mui/material";
import { styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";

type Option = {
  id: string | number;
  label: string;
  onClick?: () => void;
};

type Props<T> = {
  searchFunction: (searchTerm: string) => Promise<T[]>;
  width?: number;
  throttleRate?: number;
};

type ListBoxProps<T> = {
  values: T[] | null;
  isLoading: boolean;
  width?: number;
  closeList?: () => void;
};

const ListboxContainer = styled("ul")(({ theme, style }) => {
  return {
    width: style?.width || 300,
    maxHeight: 200,
    margin: 0,
    padding: 0,
    zIndex: 100,
    position: "absolute",
    listStyle: "none",
    backgroundColor: theme.palette.mode === "light" ? "white" : "black",
    overflow: "auto",
    border: "1px solid black",
  };
});

const ListContainerItem = styled("li")(() => {
  return {
    cursor: "pointer",
    paddingInline: "12px",
    marginBlock: "8px",
  };
});

function ListBox<T extends Option>(props: ListBoxProps<T>): JSX.Element {
  if (props.isLoading || !props.values) return <></>;

  if (props.values.length === 0) {
    return (
      <ListboxContainer style={{ width: props.width }}>
        <li>No Results</li>
      </ListboxContainer>
    );
  }

  return (
    <ListboxContainer style={{ width: props.width }}>
      {props.values.map((option, index) => {
        return (
          <ListContainerItem
            key={index}
            onMouseDown={(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => e.preventDefault()}
            onClick={(): void => {
              option.onClick?.();
              props.closeList?.();
            }}
          >
            {option.label}
          </ListContainerItem>
        );
      })}
    </ListboxContainer>
  );
}

function SearchBox<T extends Option>(props: Props<T>): JSX.Element {
  let throttledCall: NodeJS.Timeout;
  const width = props.width || 300;
  const THROTTLE_RATE = props.throttleRate || 0;

  const containerRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<T[] | null>(null);

  useEffect(() => {
    if (throttledCall) {
      clearTimeout(throttledCall);
    }

    setOptions(null);

    if (searchTerm) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    throttledCall = setTimeout(async () => {
      if (searchTerm) {
        const results = await props.searchFunction(searchTerm);
        setOptions(results);
        setIsLoading(false);
      }
    }, THROTTLE_RATE);

    return () => clearTimeout(throttledCall);
  }, [searchTerm]);

  function handleSearchTermChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value);
  }
  function handleOpenList(): void {
    setIsOpen(true);
  }
  function handleCloseList(): void {
    setIsOpen(false);
  }
  function handleCloseListAndUnfocusBox(): void {
    handleCloseList();
    containerRef.current?.blur();
  }

  return (
    <div>
      <TextField
        size="small"
        placeholder="enter keywords here.."
        style={{ width }}
        value={searchTerm}
        onChange={handleSearchTermChange}
        onFocus={handleOpenList}
        onBlur={handleCloseList}
        inputRef={containerRef}
        InputProps={{
          endAdornment: <>{isLoading ? <CircularProgress color="inherit" size={20} /> : null}</>,
        }}
      />

      {isOpen && searchTerm && (
        <ListBox<T> values={options} isLoading={isLoading} width={width} closeList={handleCloseListAndUnfocusBox} />
      )}
    </div>
  );
}

export default SearchBox;
