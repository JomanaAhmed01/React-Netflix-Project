import React from 'react';

function FooterTitle({children, ...restProps}) {
    return (
    <div className="footer-title" {...restProps}>{children}Questions? Contact us.</div>
    )
}

export default FooterTitle;