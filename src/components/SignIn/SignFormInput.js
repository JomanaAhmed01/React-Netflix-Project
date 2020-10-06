import React from 'react';

function SignFormInput({children, ...restProps}) {
    return (
    <div className="signform-input" {...restProps}>{children}<input type="text" placeholder="Email address"></input></div>
    )
}

export default SignFormInput;