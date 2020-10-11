import React from 'react';

function SignFormText({children, ...restProps}) {
    return (
    <div className="signform-text" {...restProps}>{children}</div>
    )
}

export default SignFormText;