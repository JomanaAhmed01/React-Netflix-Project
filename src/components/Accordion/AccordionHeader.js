import React from 'react';

function AccordionHeader({children, ...restProps}) {
    return (
    <div className="acc-header" {...restProps}>{children}<h2 className="header-acc">What is Netflix?</h2></div>
    )
}

export default AccordionHeader;