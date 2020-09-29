import React from 'react';
import AccordionItem from '../components/Accordion/AccordionItem';
import AccordionTitle from '../components/Accordion/AccordionTitle';
import AccordionWrapper from '../components/Accordion/AccordionWrapper';

function AccordionCompound() {
    return (
        <AccordionWrapper>
            <AccordionTitle />
            <AccordionItem />
        </AccordionWrapper>
    )
}

export default AccordionCompound;