import React from 'react';

function SignFormBtn({children, ...restProps}) {
    return (
    <div {...restProps}>{children}<button className="signform-btn">Sign In</button></div>
    )
}

export default SignFormBtn;