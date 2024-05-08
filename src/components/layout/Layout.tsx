import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, SvgIconTypeMap, SxProps, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container, { ContainerOwnProps } from "@mui/material/Container";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import background from "../../images/background.jpg";

const containerStyle = {
    paddingTop: "2rem",
    paddingBottom: "2rem",
};

interface Props {
    children: JSX.Element | JSX.Element[];
    header?: string;
    subheader?: string;
    Icon?: OverridableComponent<SvgIconTypeMap>;
    backButton?: boolean;
    maxWidth?: ContainerOwnProps["maxWidth"] | false;
}

const MainContainer = styled(Container)(() => ({
    position: "relative",
    minHeight: "calc(100vh - 64px)",
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.3,
        background: `url(${background})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        zIndex: -1,
    },
}));

const Layout = ({ children, header, subheader, Icon, backButton, maxWidth = "sm" }: Props) => (
    <MainContainer maxWidth={false}>
        <Container style={containerStyle} maxWidth={maxWidth}>
            <LayoutHeader text={header} Icon={Icon} backButton={backButton} />
            {subheader ? <LayoutSubheader text={subheader} /> : null}
            {children}
        </Container>
    </MainContainer>
);

export default Layout;

interface HeaderProps {
    text?: string;
    Icon?: OverridableComponent<SvgIconTypeMap>;
    backButton?: boolean;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
        lineHeight: 1.5,
    },
    [theme.breakpoints.up("md")]: {
        lineHeight: 1.1,
    },
}));

const StyledIconButton = styled(IconButton)(({theme}) => ({
    marginRight: theme.spacing(2),
    height: "fit-content",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
    "&:active": {
        backgroundColor: theme.palette.primary.dark,
    }
}))

export const LayoutHeader = ({ text, Icon, backButton = false }: HeaderProps) => {
    const navigate = useNavigate();

    return text ? (
        <StyledTypography variant="h4">
            {backButton ? (
                <StyledIconButton onClick={() => navigate("../")}>
                    <ArrowBackIcon />
                </StyledIconButton>
            ) : null}
            {Icon ? (
                <Avatar sx={{ mr: 2, backgroundColor: "background.icon" }}>
                    <Icon />
                </Avatar>
            ) : null}
            {text}
        </StyledTypography>
    ) : null;
};

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
