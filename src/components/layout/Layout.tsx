import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const containerStyle = {
    paddingTop: "2rem",
    paddingBottom: "2rem",
};

interface Props {
    children: JSX.Element | JSX.Element[];
    header: string;
    subheader?: string;
}

const Layout = ({ children, header, subheader }: Props) => (
    <Container style={containerStyle} maxWidth="md">
        <LayoutHeader text={header} />
        {subheader ? <LayoutSubheader text={subheader} /> : null}
        {children}
    </Container>
);

export default Layout;

interface HeaderProps {
    text: string;
}

export const LayoutHeader = ({ text }: HeaderProps) => (
    <Typography variant="h4" mb={3}>
        {text}
    </Typography>
);

export const LayoutSubheader = ({ text }: HeaderProps) => (
    <Typography variant="h5" mb={3}>
        {text}
    </Typography>
);

interface BoxProps {
    children: JSX.Element | JSX.Element[];
    sx?: SxProps;
}

export const CenteredBox = ({ children, sx }: BoxProps) => (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", ...sx }}>{children}</Box>
);
