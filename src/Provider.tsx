import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./i18n.ts";
import Router from "./Router.tsx";
import { createContext, useMemo, useState } from "react";
import { PaletteMode, ThemeOptions } from "@mui/material";

const themeConfig: ThemeOptions = {
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
};

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        secondary: {
            main: "#90caf9",
            light: "#e3f2fd",
            dark: "#42a5f5",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        ...(mode === "light"
            ? {
                  text: {
                      primary: "#27466b",
                  },
                  background: {
                      paper: "#eceff1",
                      icon: "#27466b",
                  },
              }
            : {
                  background: {
                      paper: "#101720",
                      default: "#101720",
                      icon: "rgba(255, 255, 255, 0.7)",
                  },
              }),
    },
});

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Provider = () => {
    const [mode, setMode] = useState<PaletteMode>("dark");
    const colorMode = useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }),
        []
    );

    // Update the theme only if the mode changes
    const theme = useMemo(() => responsiveFontSizes(createTheme({ ...themeConfig, ...getDesignTokens(mode) })), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default Provider;
