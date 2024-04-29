import { PaletteMode, Theme, ThemeOptions, responsiveFontSizes } from "@mui/material";
import DreamOrphans from "../fonts/Dream_Orphans.woff2";

export const themeConfig: ThemeOptions = {
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
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontFamily: "Dream Orphans",
                    letterSpacing: "1px",
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                  font-family: 'Dream Orphans';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  src: url(${DreamOrphans}) format('woff2');
                  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
              `,
        },
    },
    typography: {
        fontFamily: [
            '"ivyora-display"',
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
        h4: {
            fontFamily: "Dream Orphans",
            textTransform: "uppercase",
        },
        h5: {
            fontFamily: "Dream Orphans",
            textTransform: "uppercase",
        },
    },
};

export const getPalette = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            main: "#b6e3e3",
            ligth: "#dffdf8",
            dark: "#7c9d9d",
        },
        secondary: {
            main: "#7c9d9d",
            light: "#7c9d9d",
            dark: "#7c9d9d",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        background: {
            icon: "#b6e3e3",
            paper: "#fff",
        },
        text: {
            primary: "#7c9d9d",
        },
    },
});

export const getResponsiveFontSizes = (theme: Theme) => {
    const responsiveTheme = responsiveFontSizes(theme);

    responsiveTheme.typography.body1[theme.breakpoints.down("sm")] = {
        fontSize: "0.85rem",
    };

    return responsiveTheme;
};
