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
}

const Layout = ({ children, header }: Props) => (
    <Container style={containerStyle} maxWidth="md">
        <LayoutHeader text={header} />
        {children}
    </Container>
);

export default Layout;

interface HeaderProps {
    text: string;
}

export const LayoutHeader = ({ text }: HeaderProps) => (
    <Typography variant="h4" gutterBottom>
        {text}
    </Typography>
);

interface BoxProps {
    children: JSX.Element | JSX.Element[];
}

export const CenteredBox = ({ children }: BoxProps) => (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{children}</Box>
);
