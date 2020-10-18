import React from 'react';

function SignFormBase({children, ...restProps}) {
    return (
    <div className="signform-base" {...restProps}>{children}</div>
    )
}

export default SignFormBase;