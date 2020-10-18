import React from 'react';

function SignFormBtn({children, ...restProps}) {
    return (
    <div className="signform-btn" {...restProps}>{children}</div>
    )
}

export default SignFormBtn;