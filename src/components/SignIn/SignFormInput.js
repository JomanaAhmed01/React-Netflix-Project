import React from 'react';

function SignFormInput({children, ...restProps}) {
    return (
      <>
        <div className="signform-input" {...restProps}>
          {children}
          <input {...restProps}></input>
        </div>
      </>
    )
}

export default SignFormInput;