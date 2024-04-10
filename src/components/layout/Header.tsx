import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TerminalIcon from "@mui/icons-material/Terminal";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useTranslation } from "react-i18next";
import { MyAvatar } from "../common/MyAvatar";
import { useLocation, useNavigate } from "react-router-dom";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface HeaderItem {
    path: string;
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap>;
}

const pages: HeaderItem[] = [
    { path: "", label: "Profile", Icon: AccountCircleIcon },
    { path: "experience", label: "Experience", Icon: WorkIcon },
    { path: "education", label: "Education", Icon: SchoolIcon },
    { path: "tech", label: "Technologies", Icon: TerminalIcon },
    { path: "contact", label: "Contact", Icon: AlternateEmailIcon },
];

const langs = ["en", "fi"];

function Header() {
    const [navMenuOpen, setNavMenuOpen] = React.useState(false);
    const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);
    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const currentPath = pathname.replace("/", "");

    const toggleNavMenu = () => {
        setNavMenuOpen(!navMenuOpen);
    };
    const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElLang(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setNavMenuOpen(false);
    };

    const handleNavItemClick = (path: string) => {
        handleCloseNavMenu();
        navigate(path);
    };

    const handleCloseLangMenu = () => {
        setAnchorElLang(null);
    };

    const handleChangeLang = (l: string) => {
        handleCloseLangMenu();
        i18n.changeLanguage(l);
    };

    return (
        <>
            <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <IconButton href="#" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                            <MyAvatar />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={toggleNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton href="#">
                                <MyAvatar />
                            </IconButton>
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
                                <LanguageIcon />
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
                                    <MenuItem
                                        key={l}
                                        selected={l === i18n.language}
                                        onClick={() => handleChangeLang(l)}
                                    >
                                        <Typography>{t(`lang.${l}`)}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                anchor="top"
                variant="temporary"
                open={navMenuOpen}
                onClose={handleCloseNavMenu}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { sm: "block", md: "none" },
                }}
            >
                <Toolbar />
                <List>
                    {pages.map(({ path, label, Icon }) => (
                        <ListItemButton
                            key={path}
                            selected={currentPath === path}
                            onClick={() => handleNavItemClick(path)}
                        >
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText>{t(label)}</ListItemText>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
export default Header;
