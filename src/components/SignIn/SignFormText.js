import React from 'react';

function SignFormText({children, ...restProps}) {
    return (
    <div {...restProps}>{children}<span className="signform-text">New to Netflix?</span></div>
    )
}

export default SignFormText;