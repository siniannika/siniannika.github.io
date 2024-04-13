import Accordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const StyledAccordion = styled((props: AccordionProps) => <Accordion disableGutters elevation={0} square {...props} />)(
    ({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&::before": {
            display: "none",
        },
    })
);

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
    textAlign: "justify",
    backgroundColor: theme.palette.background.default,
    "& a": {
        color: theme.palette.primary.main,
    },
}));

interface AccordionItem {
    header: string;
    subheader?: string;
    content: string;
}

interface Props {
    items: AccordionItem[];
}

const AccordionGroup = ({ items }: Props) => {
    const [expanded, setExpanded] = useState<string | false>(items[0]?.header);

    const handleChange = (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return items.map((i) => (
        <StyledAccordion
            key={i.header}
            disableGutters
            expanded={expanded === i.header}
            onChange={handleChange(i.header)}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "rgba(255, 255, 255, .05)" }}>
                {i.subheader ? (
                    <>
                        <Typography textAlign="initial" sx={{ width: "50%", flexGrow: 1 }}>
                            {i.header}
                        </Typography>
                        <Typography sx={{ color: "text.secondary", mr: 2 }}>{i.subheader}</Typography>
                    </>
                ) : (
                    i.header
                )}
            </AccordionSummary>
            <StyledAccordionDetails>
                <div dangerouslySetInnerHTML={{ __html: i.content }}></div>
            </StyledAccordionDetails>
        </StyledAccordion>
    ));
};

export default AccordionGroup;
