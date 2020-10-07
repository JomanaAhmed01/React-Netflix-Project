import React from 'react';

function SignFormCaptcha({children, ...restProps}) {
    return (
    <p className="signform-captcha" {...restProps}>{children}This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className="learn-more" href="#">Learn more.</a></p>
    )
}

export default SignFormCaptcha;