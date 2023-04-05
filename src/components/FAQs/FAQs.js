import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";
import styled from "styled-components";

export default function FAQs() {
    const items = [
        {
            uuid: "1",
            heading: "What does this website do?",
            content: `Stitchack is a platform for tailors to manage their tasks, store 
            customer data and back it up to the cloud and also track their revenue of a
             period of time
            
            `
        },
        {
            uuid: "2",
            heading: "Is registration for free?",
            content: `Yup! You can sign up right now for no money at all`
        },
        {
            uuid: "3",
            heading: "Can i store customers' measurements?",
            content: `Definitely! You can store customer measurements and also back it up to the cloud.
            Paper rots, the cloud is eternal.`
        },
    ]
    return (
        <Wrapper id="faqs">
            <H2>FAQs</H2>
            <Accordion allowZeroExpanded>
            {items.map((item) => (
                <StyledAccordionItem key={item.uuid}>
                    <StyledAccordionItemHeading>
                        <AccordionItemButton>
                            {item.heading}
                        </AccordionItemButton>
                    </StyledAccordionItemHeading>
                    <StyledAccordionItemPanel>
                        {item.content}
                    </StyledAccordionItemPanel>
                </StyledAccordionItem>
            ))}
        </Accordion>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
   text-align: center;
    padding: 20px 0;
`;

const H2 = styled.h2`

    margin: 2em;
    font-weight: 700;
    font-size: 32px;
    line-height: 35px;
    color: rgb(168, 0, 171);
`;

const StyledAccordionItem = styled(AccordionItem)`
    // padding: 1.5em;
    // width: 50em;
    // background-color: rgb(250, 250, 250);
    margin: 0.8em;
`

const StyledAccordionItemHeading = styled(AccordionItemHeading)`
    padding: 1.5em;
    width: 50em;
    background-color: #f6e5f7;
    margin: auto;
    font-weight: 700;
`;

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
    padding: 1.5em;
    width: 50em;
    margin: auto;
`
