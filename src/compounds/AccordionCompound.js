import React from 'react';
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
            </AccordionItem>
        </AccordionWrapper>
    )
}

export default AccordionCompound;