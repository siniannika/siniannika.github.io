import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import TerminalIcon from "@mui/icons-material/Terminal";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap, SxProps } from "@mui/material";
import MobileDrawer from "../common/MobileDrawer";
import { useState } from "react";
import { useCurrentPath } from "../../hooks";

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

function NavigationTabs() {
    const { t } = useTranslation();
    const currentPath = useCurrentPath();

    return (
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
                    sx={{ color: "white" }}
                />
            ))}
        </Tabs>
    );
}
export default NavigationTabs;

interface Props {
    sx?: SxProps;
}

export const MobileNavigationMenu = ({ sx }: Props) => {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const currentPath = useCurrentPath();

    const toggleNavMenu = () => {
        setNavMenuOpen(!navMenuOpen);
    };

    const handleCloseNavMenu = () => {
        setNavMenuOpen(false);
    };

    const handleNavItemClick = (path: string) => {
        handleCloseNavMenu();
        navigate(path);
    };

    return (
        <>
            <Box sx={{ display: { xs: "flex", md: "none" }, ...sx }}>
                <IconButton size="large" onClick={toggleNavMenu} color="inherit">
                    <MenuIcon />
                </IconButton>
            </Box>
            <MobileDrawer anchor="top" open={navMenuOpen} onClose={handleCloseNavMenu}>
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
            </MobileDrawer>
        </>
    );
};
