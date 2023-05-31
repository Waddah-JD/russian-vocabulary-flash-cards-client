import { styled } from "@mui/material";

type Option = {
  id: string;
  [keyLabel: string]: string;
};

type Props<T> = {
  values: T[];
  keyLabel: keyof T;
  // TODO add onClick

  isLoading: boolean;
  width?: number;
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

function ListBox<T extends Option>(props: Props<T>): JSX.Element {
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
        const label = option[props.keyLabel];
        return <li key={index}>{label}</li>;
      })}
    </ListboxContainer>
  );
}

export default ListBox;
