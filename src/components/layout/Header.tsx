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
import Switch from "@mui/material/Switch";
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
import { SvgIconTypeMap, styled, useTheme } from "@mui/material";
import { ColorModeContext } from "../../Provider";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(22px)",
            "& .MuiSwitch-thumb:before": {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    "#fff"
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
        width: 32,
        height: 32,
        "&::before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                "#fff"
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        borderRadius: 20 / 2,
    },
}));

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
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

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
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? theme.palette.background.paper : "#27384c",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
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
                        <Tabs
                            textColor="secondary"
                            indicatorColor="secondary"
                            value={currentPath}
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
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
                        <MaterialUISwitch
                            checked={theme.palette.mode === "dark"}
                            onChange={colorMode.toggleColorMode}
                        />
                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton onClick={handleOpenLangMenu} sx={{ p: 0 }}>
                                <LanguageIcon sx={{ color: "white" }} />
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
                                <Icon sx={{ color: "text.primary" }} />
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
