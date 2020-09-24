import React from 'react'

function JumboItem({children, ...restProps}) {
    return (
    <div {...restProps}>{children}</div>
    )
}

export default JumboItem;