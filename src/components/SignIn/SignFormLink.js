import React from 'react';

function SignFormLink({children, ...restProps}) {
    return (
    <a className="signform-link" href="#" {...restProps}>{children}Sign up now.</a>
    )
}

export default SignFormLink;