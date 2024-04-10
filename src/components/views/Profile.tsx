import Typography from "@mui/material/Typography";
import { MyAvatar } from "../common/MyAvatar";
import { useTranslation } from "react-i18next";
import Layout, { CenteredBox, LayoutSubheader } from "../layout/Layout";

const Profile = () => {
    const { t } = useTranslation();

    return (
        <Layout header={t("Name")} subheader={t("JobTitle")}>
            <CenteredBox sx={{ mb: 3 }}>
                <MyAvatar size="lg" />
            </CenteredBox>
            <LayoutSubheader text={t("Profile")} />
            <Typography variant="body1">
                {t("aboutMeContent")}
            </Typography>
        </Layout>
    );
};

export default Profile;
