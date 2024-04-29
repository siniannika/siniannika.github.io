import Typography from "@mui/material/Typography";
import { MyAvatar } from "../common/MyAvatar";
import { useTranslation } from "react-i18next";
import Layout, { CenteredBox, LayoutSubheader } from "../layout/Layout";

const Profile = () => {
    const { t } = useTranslation();

    return (
        <Layout header="">
            <CenteredBox sx={{ mb: 3 }}>
                <MyAvatar size="lg" />
            </CenteredBox>
            <LayoutSubheader text={t("Profile")} />
            <Typography variant="body1" textAlign="justify" sx={{ whiteSpace: "pre-wrap" }}>
                {t("aboutMeContent").replace(/<br\/>/g, "\n")}
            </Typography>
        </Layout>
    );
};

export default Profile;
