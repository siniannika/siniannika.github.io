import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionItem {
    header: string;
    content: string;
}

interface Props {
    items: AccordionItem[];
}

const AccordionGroup = ({ items }: Props) => {
    return items.map((i) => (
        <Accordion key={i.header}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>{i.header}</AccordionSummary>
            <AccordionDetails>{i.content}</AccordionDetails>
        </Accordion>
    ));
};

export default AccordionGroup;
