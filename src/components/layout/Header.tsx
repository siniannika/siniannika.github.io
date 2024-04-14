import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { MyAvatar } from "../common/MyAvatar";
import DarkModeToggle from "../header/DarkModeToggle";
import LanguageSelector from "../header/LanguageSelector";
import NavigationTabs, { MobileNavigationMenu } from "../header/Navigation";
import MobileSettingsMenu from "../header/MobileSettingsMenu";

function Header() {
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
                        <MobileNavigationMenu sx={{ flexGrow: 1 }} />
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton href="#">
                                <MyAvatar />
                            </IconButton>
                        </Box>
                        <NavigationTabs />
                        <MobileSettingsMenu sx={{ flexGrow: 0 }} />
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
