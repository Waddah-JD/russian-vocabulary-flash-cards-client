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
};

function SearchBox<T extends Option>(props: Props<T>): JSX.Element {
  const WIDTH = 300;

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
    if (searchTerm) {
      handleSearch();
    }
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
