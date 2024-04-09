import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./i18n";
import Router from "./Router.tsx";
import "./index.css";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            paper: "#101720",
            default: "#101720",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Router />
        </ThemeProvider>
    </React.StrictMode>
);
