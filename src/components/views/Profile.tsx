import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";

const Profile = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <img src="profile_banner2.png" alt="Profiili" width="100%" />
            <Typography variant="body1" textAlign="justify" sx={{ mt: 2, whiteSpace: "pre-wrap" }}>
                {t("aboutMeContent").replace(/<br\/>/g, "\n")}
            </Typography>
        </Layout>
    );
};

export default Profile;
