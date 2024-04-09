import { Container, Typography } from "@mui/material";
import { MyAvatar } from "../common/MyAvatar";
import { useTranslation } from "react-i18next";
import { CenteredBox } from "../layout/Layout";

const containerStyle = {
    paddingTop: "2rem",
};

const Profile = () => {
    const { t } = useTranslation();

    return (
        <>
            <Container style={containerStyle} maxWidth="xl">
                <Typography variant="h4" mb={3}>
                    {t("Name")}
                </Typography>
                <Typography variant="h5" mb={3}>
                    {t("JobTitle")}
                </Typography>
                <CenteredBox>
                    <MyAvatar size="lg" />
                </CenteredBox>
            </Container>
            <Container style={containerStyle} maxWidth="md">
                <Typography variant="h5" gutterBottom>
                    {t("Profile")}
                </Typography>
                <Typography variant="body1">{t("aboutMeContent")}</Typography>
            </Container>
        </>
    );
};

export default Profile;
