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

    @media (min-width: 1600px) {
        padding: 3vw 0;
    }
`;

const H2 = styled.h2`

    margin: 2em;
    font-weight: 700;
    font-size: 32px;
    line-height: 35px;
    // color: rgb(168, 0, 171);
    color: var(--primaryColor);

    @media (min-width: 1600px) {
        font-size: 3vw;
        line-height: 3vw;
        margin: 3vw 0;
    }
`;

const StyledAccordionItem = styled(AccordionItem)`
    margin: 0.8em;
`

const StyledAccordionItemHeading = styled(AccordionItemHeading)`
    padding: 1.5em;
    width: 80%;
    background-color: var(--background);
    margin: auto;
    font-weight: 700;
    font-size: 1.3em;
    color: var(--white);

    @media (min-width: 1600px) {
        padding: 1.5em;
        font-size: 1.2vw;
    }
`;

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
    padding: 1.5em;
    width: 80%;
    margin: auto;
    
    @media (min-width: 1600px) {
        padding: 1.5em;
        width: 80%;
        margin: auto;
        font-size: 1.2vw;
    }
`
