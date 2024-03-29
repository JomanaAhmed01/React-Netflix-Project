import React from 'react';

function FooterLink({children, ...restProps}) {
    return (
    <div className="footer-link" {...restProps}>{children}</div>
    )
}

export default FooterLink;