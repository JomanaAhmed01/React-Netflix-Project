import React from  'react';

function JumboSeparator({children, ...restProps}) {
    return (
    <div className="jumbo-separator" {...restProps}>{children}</div>
    )
}

export default JumboSeparator;