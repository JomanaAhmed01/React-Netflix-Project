import React from 'react';

function AccordionHeader({children, ...restProps}) {
    return (
    <div className="acc-header" {...restProps}>{children} hello World!!!</div>
    )
}

export default AccordionHeader;