import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SettingsIcon from "@mui/icons-material/Settings";
import MobileDrawer from "../common/MobileDrawer";
import DarkModeToggle from "./DarkModeToggle";
import { MobileLanguageSelector } from "./LanguageSelector";
import { SxProps } from "@mui/material";
import { useState } from "react";

interface Props {
    sx?: SxProps;
}

function MobileSettingsMenu({ sx }: Props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };
    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <Box sx={{ display: { xs: "block", md: "none" }, ...sx }}>
                <IconButton size="large" onClick={toggleMenuOpen} color="inherit">
                    <SettingsIcon />
                </IconButton>
            </Box>
            <MobileDrawer anchor="right" open={menuOpen} onClose={handleCloseMenu}>
                <List>
                    <ListItem>
                        <DarkModeToggle showLabel sx={{ ml: 2 }} />
                    </ListItem>
                    <ListItem>
                        <MobileLanguageSelector />
                    </ListItem>
                </List>
            </MobileDrawer>
        </>
    );
}
export default MobileSettingsMenu;
