import React from 'react';
import AccordionBody from '../components/Accordion/AccordionBody';
import AccordionHeader from '../components/Accordion/AccordionHeader';
import AccordionItem from '../components/Accordion/AccordionItem';
import AccordionTitle from '../components/Accordion/AccordionTitle';
import AccordionWrapper from '../components/Accordion/AccordionWrapper';

function AccordionCompound() {
    return (
        <AccordionWrapper>
            <AccordionTitle />
            <AccordionItem>
                <AccordionHeader />
                <AccordionBody />
            </AccordionItem>
        </AccordionWrapper>
    )
}

export default AccordionCompound;