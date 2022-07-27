import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { WealthHeartSVGComponent } from "src/icons";

interface AccordionsProps {
    title: string,
    hasIcon?: React.ReactNode,
    children: React.ReactNode,
}

export default function Accordions({ title, hasIcon, children }: AccordionsProps) {
    return (
        <Accordion
            sx={{
                borderRadius: "4px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                padding: "14px 21px"
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ height: "0px", display: "flex", alignItems: "center" }}
            >
                {hasIcon}
                <Typography fontSize="20px" fontWeight="700" lineHeight="23.44px" color="#242323" display="flex" alignItems="center" ml={hasIcon ? "22px" : "0px"}>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion >
    )
}