import React from 'react';

function Logo({...restProps}) {
    return (
        <a href="/" className="logo" {...restProps}><img src="./images/misc/logo.svg" width="120px" /></a>
    )
}

export default Logo;