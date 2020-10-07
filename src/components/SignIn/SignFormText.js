import React from 'react';

function SignFormText({children, ...restProps}) {
    return (
    <span className="signform-text" {...restProps}>{children}New to Netflix?</span>
    )
}

export default SignFormText;