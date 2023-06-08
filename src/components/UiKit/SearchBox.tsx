import { CircularProgress, TextField } from "@mui/material";
import { styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { shouldForwardProp } from "utils/mui";

const DEFAULT_BOX_WIDTH = 300;
const DEFAULT_BOX_LIST_HEIGHT = 163;
const DEFAULT_BOX_INLINE_MARGIN = 2;

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

type ListboxContainerProps = {
  width?: number;
};

const ListboxContainer = styled("ul", {
  shouldForwardProp: (prop) => shouldForwardProp<ListboxContainerProps>(["width"], prop),
})<ListboxContainerProps>(({ theme, width }) => {
  return {
    width: width || DEFAULT_BOX_WIDTH,
    maxHeight: DEFAULT_BOX_LIST_HEIGHT,
    marginInline: DEFAULT_BOX_INLINE_MARGIN,
    marginBlock: 0,
    padding: 0,
    zIndex: 100,
    position: "absolute",
    listStyle: "none",
    backgroundColor: theme.palette.mode === "light" ? "white" : "black",
    overflow: "auto",
    boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.4)",
    borderRadius: "4px",
  };
});

const ListContainerItem = styled("li")(() => {
  return {
    cursor: "pointer",
    paddingInline: "12px",
    paddingBlock: "4px",
    ":not(:last-child)": {
      borderBlockEnd: "1px solid rgba(0, 0, 0, 0.2)",
    },
  };
});

function ListBox<T extends Option>(props: ListBoxProps<T>): JSX.Element {
  if (props.isLoading || !props.values) return <></>;

  if (props.values.length === 0) {
    return (
      <ListboxContainer width={props.width}>
        <ListContainerItem>No Results</ListContainerItem>
      </ListboxContainer>
    );
  }

  return (
    <ListboxContainer width={props.width}>
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
  const width = props.width || DEFAULT_BOX_WIDTH;
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
        <ListBox<T>
          values={options}
          isLoading={isLoading}
          width={width - DEFAULT_BOX_INLINE_MARGIN * 2}
          closeList={handleCloseListAndUnfocusBox}
        />
      )}
    </div>
  );
}

export default SearchBox;
