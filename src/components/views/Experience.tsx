import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import AccordionGroup from "../common/Accordion";
import WorkIcon from "@mui/icons-material/Work";

const exp = ["EasyOpp", "Adalia", "Other"];

const Experience = () => {
    const { t } = useTranslation();

    return (
        <Layout header={t("Experience")} Icon={WorkIcon}>
            <AccordionGroup
                items={exp.map((e) => ({
                    header: t(`workExperience.header.${e}`),
                    subheader: t(`workExperience.subheader.${e}`),
                    content: t(`workExperience.content.${e}`),
                }))}
            />
        </Layout>
    );
};

export default Experience;
