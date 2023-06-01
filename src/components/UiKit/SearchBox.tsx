import { CircularProgress, TextField } from "@mui/material";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";

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
  values: T[];
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
  if (props.isLoading) {
    return (
      <ListboxContainer style={{ width: props.width }}>
        <li>Loading...</li>
      </ListboxContainer>
    );
  }

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

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<T[]>([]);

  async function handleSearch(): Promise<void> {
    setIsLoading(true);
    const results = await props.searchFunction(searchTerm);
    setOptions(results);
    setIsLoading(false);
  }

  useEffect(() => {
    if (throttledCall) {
      clearTimeout(throttledCall);
    }

    throttledCall = setTimeout(() => {
      if (searchTerm) {
        handleSearch();
      }
    }, THROTTLE_RATE);

    return () => clearTimeout(throttledCall);
  }, [searchTerm]);

  useEffect(() => {
    if (!searchTerm) {
      setOptions([]);
    }
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

  return (
    <div onBlur={handleCloseList}>
      <TextField
        size="small"
        placeholder="enter keywords here.."
        style={{ width }}
        value={searchTerm}
        onChange={handleSearchTermChange}
        onFocus={handleOpenList}
        InputProps={{
          endAdornment: <>{isLoading ? <CircularProgress color="inherit" size={20} /> : null}</>,
        }}
      />

      {isOpen && searchTerm && (
        <ListBox<T> values={options} isLoading={isLoading} width={width} closeList={handleCloseList} />
      )}
    </div>
  );
}

export default SearchBox;
