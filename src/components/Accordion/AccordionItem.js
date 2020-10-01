import React from 'react';
import {useState} from 'react';

function AccordionItem({children, ...restProps}) {
    const [FAQState, setFAQState] = useState('close');

    return (
    <div className="acc-item" {...restProps}>{children}</div>
    )
}

export default AccordionItem;