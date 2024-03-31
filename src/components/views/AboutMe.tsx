import { Container, Typography } from "@mui/material";
import { MyAvatar } from "../common/MyAvatar";
import { useTranslation } from "react-i18next";
import { CenteredBox } from "../layout/Layout";

const containerStyle = {
    paddingTop: "2rem",
    paddingBottom: "2rem",
};

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <>
            <Container style={containerStyle} maxWidth="xl">
                <Typography variant="h3" gutterBottom>
                    Roope Pöyry - Senior Software Developer
                </Typography>
                <CenteredBox>
                    <MyAvatar size="lg" />
                </CenteredBox>
            </Container>
            <Container style={containerStyle} maxWidth="md">
                <Typography variant="h4" gutterBottom>
                    {t("About Me")}
                </Typography>
                <Typography variant="body1">{t("aboutMeContent")}</Typography>
            </Container>
        </>
    );
};

export default AboutMe;
