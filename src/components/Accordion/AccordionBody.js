import React from 'react';

function AccordionBody({children, ...restProps}) {
    return (
    <div className="acc-body" {...restProps}>{children}</div>
    )
}

export default AccordionBody;