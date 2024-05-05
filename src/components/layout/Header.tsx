import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { MyAvatar } from "../common/MyAvatar";
import NavigationTabs, { MobileNavigationMenu } from "../header/Navigation";
import { useState } from "react";

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
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <IconButton href="#" color="secondary" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                            <MyAvatar />
                        </IconButton>
                        <MobileNavigationMenu open={openMenu === MenuType.Nav} setOpen={handleSetMenuOpen(MenuType.Nav)} sx={{ flexGrow: 1 }} />
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton href="#" onClick={handleCloseMenu}>
                                <MyAvatar />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 0, width: "48px", display: { xs: "flex", md: "none" } }}></Box>
                        <NavigationTabs />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Header;
