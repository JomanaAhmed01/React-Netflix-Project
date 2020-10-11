import React from 'react';

function SignFormTitle({children, ...restProps}) {
    return (
    <div className="signform-title" {...restProps}>{children}</div>
    )
}

export default SignFormTitle;