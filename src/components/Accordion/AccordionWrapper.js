import React from 'react';

function AccordionWrapper({children, ...restProps}) {
    return (
    <div className="acc-wrapper" {...restProps}>{children}</div>
    )
}

export default AccordionWrapper;