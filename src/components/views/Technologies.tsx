import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import AccordionGroup from "../common/Accordion";
import TerminalIcon from "@mui/icons-material/Terminal";

const techs = ["React", "TypeScript", ".NET", "Ruby on Rails"];

const Technologies = () => {
    const { t } = useTranslation();

    return (
        <Layout header={t("Technologies")} Icon={TerminalIcon}>
            <AccordionGroup items={techs.map((t) => ({ header: t, content: t }))} />
        </Layout>
    );
};

export default Technologies;
