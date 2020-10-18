import React from 'react';

function JumboTextWrapper({children, ...restProps}) {
    return (
    <div className="jumbo-text-wrapper" {...restProps}>{children}</div>
    )
}

export default JumboTextWrapper;