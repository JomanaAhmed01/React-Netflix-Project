import React from 'react';

function SignFormTitle({children, ...restProps}) {
    return (
    <div className="signform-title" {...restProps}>{children}<h2>Sign In</h2></div>
    )
}

export default SignFormTitle;