import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ['"Roboto"', "sans-serif"].join(","),
  },
  components: {
    MuiTable: { styleOverrides: { root: { marginBlock: "10px", maxWidth: 600 } } },
    MuiTableCell: { styleOverrides: { root: { border: "1px solid black", textAlign: "center" } } },
  },
});

export default theme;