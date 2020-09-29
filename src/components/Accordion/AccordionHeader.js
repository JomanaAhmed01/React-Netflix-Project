import React from 'react';

function AccordionHeader({children, ...restProps}) {
    return (
    <div className="acc-header" {...restProps}>{children}</div>
    )
}

export default AccordionHeader;