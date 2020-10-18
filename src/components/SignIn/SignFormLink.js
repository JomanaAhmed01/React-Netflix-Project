import React from 'react';

function SignFormLink({children, ...restProps}) {
    return (
    <div className="signform-link" {...restProps}>
        <a {...restProps}>{children}</a>
    </div>
    )
}

export default SignFormLink;