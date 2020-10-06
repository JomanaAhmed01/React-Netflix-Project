import React from 'react';

function SignFormInput({children, ...restProps}) {
    return (
    <div {...restProps}>{children}<input className="signform-input" type="text" placeholder="Email or phone number"></input></div>
    )
}

export default SignFormInput;