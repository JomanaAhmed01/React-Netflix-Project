import React from 'react';

function SignFormBtn({children, ...restProps}) {
    return (
    <div {...restProps}>{children}<a className="signform-btn" href="#">Sign In</a></div>
    )
}

export default SignFormBtn;