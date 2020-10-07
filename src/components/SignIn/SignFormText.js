import React from 'react';

function SignFormText({children, ...restProps}) {
    return (
    <p className="signform-text" {...restProps}>{children}New to Netflix?</p>
    )
}

export default SignFormText;