import React from 'react';

function SignFormInput({children, ...restProps}) {
    return (
      <>
        <div {...restProps}>{children}<input className="signform-input" type="text" placeholder="Email or phone number"></input></div>

        <div {...restProps}>{children}<input className="signform-password" type="password" placeholder="Password"></input></div>
      </>
    )
}

export default SignFormInput;