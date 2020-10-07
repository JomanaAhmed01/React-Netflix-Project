import React from 'react';

function SignFormText({children, ...restProps}) {
    return (
    <div {...restProps}>{children}<p className="signform-text">New to Netflix?</p></div>
    )
}

export default SignFormText;