import React from 'react';

function JumboImage({children, ...restProps}) {
    return (
    <>
      <img {...restProps}>{children}</img>
    </>
    )
}

export default JumboImage;