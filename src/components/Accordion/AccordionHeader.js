import React from 'react';

function AccordionHeader({children, ...restProps}) {

    return (
    <div className="acc-header" {...restProps}>
        {children}
        <img src="./images/icons/close-slim.png"/>
    </div>
    )
}

export default AccordionHeader;