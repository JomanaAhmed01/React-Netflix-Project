import React from 'react';

function AccordionItem({children, ...restProps}) {
    return (
    <div className="acc-item" {...restProps}>{children} hellooo!!</div>
    )
}

export default AccordionItem;