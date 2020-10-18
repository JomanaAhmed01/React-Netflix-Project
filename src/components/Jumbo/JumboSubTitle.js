import React, { Children } from 'react';

function JumboSubTitle({children,...restProps}) {
    return (
        <>
          <p className="jumbo-sub" {...restProps}>{children}</p>
        </>
    )
}

export default JumboSubTitle;