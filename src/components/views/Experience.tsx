import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import AccordionGroup from "../common/Accordion";

const exp = ["EasyOpp", "Adalia", "Other"];

const Experience = () => {
    const { t } = useTranslation();

    return (
        <Layout header={t("Experience")}>
            <AccordionGroup
                items={exp.map((e) => ({
                    header: t(`workExperience.header.${e}`),
                    content: t(`workExperience.content.${e}`),
                }))}
            />
        </Layout>
    );
};

export default Experience;
