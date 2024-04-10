import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./i18n.ts";
import Router from "./Router.tsx";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            paper: "#101720",
            default: "#101720",
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                textAlign: "center",
            },
        },
        MuiListItemText: {
            defaultProps: {
                primaryTypographyProps: { textAlign: "initial" },
            },
        },
    },
});

const Provider = () => (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router />
    </ThemeProvider>
);

export default Provider;
