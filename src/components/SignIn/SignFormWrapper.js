import React from 'react';

function SignFormWrapper({children, ...restProps}) {
    return (
    <div className="signform-wrapper" {...restProps}>{children}</div>
    )
}

export default SignFormWrapper;