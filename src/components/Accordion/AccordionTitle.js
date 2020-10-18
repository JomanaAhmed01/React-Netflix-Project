import React from 'react';

function AccordionTitle({children, ...restProps}) {
    return (
    <div className="acc-title" {...restProps}>{children}<h1 className="faq-header">Frequently Asked Questions</h1></div>
    )
}

export default AccordionTitle;