import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useMemo, useState } from "react";
import { PaletteMode } from "@mui/material";
import { getPalette, themeConfig } from "./theme.ts";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

interface Props {
    children: JSX.Element | JSX.Element[];
}

const Provider = ({ children }: Props) => {
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
    const theme = useMemo(() => responsiveFontSizes(createTheme({ ...themeConfig, ...getPalette(mode) })), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default Provider;
