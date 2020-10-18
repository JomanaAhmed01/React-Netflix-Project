import React from 'react';

function JumboImageWrapper({children, ...restProps}) {
    return (
    <div className="jumbo-image-wrapper" {...restProps}>{children}</div>
    )
}

export default JumboImageWrapper;