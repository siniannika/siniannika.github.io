import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { MyAvatar } from "../common/MyAvatar";
import DarkModeToggle from "../header/DarkModeToggle";
import LanguageSelector, { MobileLanguageSelector } from "../header/LanguageSelector";
import NavigationTabs, { MobileNavigationMenu } from "../header/Navigation";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import MobileMenu from "../common/MobileMenu";

enum MenuType {
    Nav,
    Settings,
}

function Header() {
    const [openMenu, setOpenMenu] = useState<MenuType | false>(false);

    const handleCloseMenu = () => setOpenMenu(false);
    const handleSetMenuOpen = (type: MenuType) => (open: boolean) => setOpenMenu(open ? type : false);

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
                        <IconButton href="#" color="secondary" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                            <MyAvatar />
                        </IconButton>
                        <MobileNavigationMenu
                            open={openMenu === MenuType.Nav}
                            setOpen={handleSetMenuOpen(MenuType.Nav)}
                            sx={{ flexGrow: 1 }}
                        />
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton href="#" onClick={handleCloseMenu}>
                                <MyAvatar />
                            </IconButton>
                        </Box>
                        <NavigationTabs />
                        <MobileMenu
                            anchor="right"
                            open={openMenu === MenuType.Settings}
                            setOpen={handleSetMenuOpen(MenuType.Settings)}
                            Icon={SettingsIcon}
                            sx={{ flexGrow: 0 }}
                        >
                            <List>
                                <ListItem>
                                    <DarkModeToggle showLabel sx={{ ml: 2 }} />
                                </ListItem>
                                <ListItem>
                                    <MobileLanguageSelector />
                                </ListItem>
                            </List>
                        </MobileMenu>
                        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
                            <DarkModeToggle />
                            <LanguageSelector />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Header;
