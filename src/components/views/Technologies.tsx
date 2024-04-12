import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import AccordionGroup from "../common/Accordion";
import TerminalIcon from "@mui/icons-material/Terminal";

const techs = ["React", ".NET", "Rails", "Azure", "AWS"];

const Technologies = () => {
    const { t } = useTranslation();

    return (
        <Layout header={t("Technologies")} Icon={TerminalIcon}>
            <AccordionGroup
                items={techs.map((tech) => ({ header: t(`tech.header.${tech}`), content: t(`tech.content.${tech}`) }))}
            />
        </Layout>
    );
};

export default Technologies;
