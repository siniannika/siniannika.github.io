import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { MyAvatar } from "../common/MyAvatar";
import { useLocation } from "react-router-dom";

interface HeaderItem {
    path: string;
    label: string;
}

const pages: HeaderItem[] = [
    { path: "", label: "About Me" },
    { path: "experience", label: "Experience" },
    { path: "education", label: "Education" },
    { path: "tech", label: "Technologies" },
    { path: "contact", label: "Contact" },
];

const langs = ["en", "fi"];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);
    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();
    const currentPath = pathname.replace("/", "");

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElLang(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseLangMenu = () => {
        setAnchorElLang(null);
    };

    const handleChangeLang = (l: string) => {
        handleCloseLangMenu();
        i18n.changeLanguage(l);
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <MyAvatar sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                                    <Link href={`#${page.path}`} underline="none" color="white">
                                        {t(page.label)}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <MyAvatar />
                    </Box>
                    <Tabs value={currentPath} sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Tab
                                key={page.path}
                                value={page.path}
                                label={t(page.label)}
                                href={`#${page.path}`}
                                onClick={handleCloseNavMenu}
                                sx={{ color: "white" }}
                            />
                        ))}
                    </Tabs>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleOpenLangMenu} sx={{ p: 0 }}>
                            {/* <Avatar sx={{ color: "white" }}> */}
                                <LanguageIcon />
                            {/* </Avatar> */}
                        </IconButton>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElLang}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElLang)}
                            onClose={handleCloseLangMenu}
                        >
                            {langs.map((l) => (
                                <MenuItem key={l} selected={l === i18n.language} onClick={() => handleChangeLang(l)}>
                                    <Typography textAlign="center">{t(`lang.${l}`)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
