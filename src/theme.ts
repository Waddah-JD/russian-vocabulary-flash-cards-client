import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ['"Roboto"', "sans-serif"].join(","),
  },
  components: {
    MuiTable: { styleOverrides: { root: { marginBlock: "8px" } } },
    MuiTableCell: { styleOverrides: { root: { border: "1px solid black", textAlign: "center" } } },
    MuiLink: { styleOverrides: { root: { textDecoration: "none" } } },
  },
});

export default theme;
