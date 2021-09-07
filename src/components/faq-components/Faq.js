import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import darkThemeContext from "../darkThemeContext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./css/Faq.css";



export default function Pricing() {
    const { darkTheme } = useContext(darkThemeContext);

    return (
        <div className='faq-content'>
            <h1 className='faq-heading'>General</h1>
            <Accordion className='faq-accordian'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography className='faq-question'>Why Can't I see Anything in the Marketplace?</Typography>
                </AccordionSummary>
                <AccordionDetails className='faq-answer'>
                    <Typography>
                        Users are required to login and connect their Metamask accounts via the Metamask extension in order to see NFTs within the marketplace.
                    </Typography>
                </AccordionDetails>
            </Accordion><Accordion className='faq-accordian'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography className='faq-question'>Why Can't I Create New Tokens?</Typography>
                </AccordionSummary>
                <AccordionDetails className='faq-answer'>
                    <Typography>
                        Currently, only approved administrators can mint new tokens.
                    </Typography>
                </AccordionDetails>
            </Accordion><Accordion className='faq-accordian'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography className='faq-question'>How do I Unsubscribe from the Newsletter?</Typography>
                </AccordionSummary>
                <AccordionDetails className='faq-answer'>
                    <Typography>
                        Users can unsubscribe from the footer of every newsletter email sent.
                    </Typography>
                </AccordionDetails>
            </Accordion>        </div>
    );
}
