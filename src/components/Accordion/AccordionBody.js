import React from 'react';

function AccordionBody({children, ...restProps}) {
    let FAQState = 'jajajaj';

    if (FAQState === 'open') {
        return (
            <div className="acc-body" {...restProps}>{children}</div>
            )
    } else {
        return null;
    }
   
}

export default AccordionBody;