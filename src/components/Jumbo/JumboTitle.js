import React from 'react';

function JumboTitle({Children ,...restProps}) {
    return (
        <>
          <h1 className="jumbo-title" {...restProps}>{Children}Enjoy on your TV.</h1>

          <h1 className="jumbo-title" {...restProps}>{Children}Download your shows to watch offline.</h1>

          <h1 className="jumbo-title" {...restProps}>{Children}Watch everywhere.</h1>
        </>
    )
}

export default JumboTitle;