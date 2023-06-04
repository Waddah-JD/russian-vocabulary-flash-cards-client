import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ['"Roboto"', "sans-serif"].join(","),
  },
  components: {
    MuiTableCell: { styleOverrides: { root: { border: "1px solid black", textAlign: "center" } } },
  },
});

export default theme;
