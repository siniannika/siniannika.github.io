import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
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
    typography: {
        fontFamily: [
            '"Montserrat"',
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
});

const Provider = () => (
    <ThemeProvider theme={responsiveFontSizes(darkTheme)}>
        <CssBaseline />
        <Router />
    </ThemeProvider>
);

export default Provider;
