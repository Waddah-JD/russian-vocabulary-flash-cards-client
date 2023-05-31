import { CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import ListBox from "./ListBox";

type Option = {
  id: string;
  [keyLabel: string]: string;
};

type Props<T> = {
  keyLabel: keyof T;
  searchFunction: (searchTerm: string) => Promise<T[]>;
  width?: number;
  throttleRate?: number;
};

function SearchBox<T extends Option>(props: Props<T>): JSX.Element {
  let throttledCall: NodeJS.Timeout;
  const WIDTH = props.width || 300;
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
  function handleSearchTermInputFocus(): void {
    setIsOpen(true);
  }
  function handleSearchTermInputBlur(): void {
    setIsOpen(false);
  }

  return (
    <div style={{ position: "relative" }}>
      <TextField
        size="small"
        placeholder="enter keywords here.."
        style={{ width: WIDTH }}
        value={searchTerm}
        onChange={handleSearchTermChange}
        onFocus={handleSearchTermInputFocus}
        onBlur={handleSearchTermInputBlur}
        InputProps={{
          endAdornment: <>{isLoading ? <CircularProgress color="inherit" size={20} /> : null}</>,
        }}
      />

      {isOpen && searchTerm && <ListBox<T> values={options} keyLabel="word" isLoading={isLoading} width={WIDTH} />}
    </div>
  );
}

export default SearchBox;
