import React from 'react';

function AccordionTitle({children, ...restProps}) {
    return (
    <div className="acc-title" {...restProps}>{children}</div>
    )
}

export default AccordionTitle;