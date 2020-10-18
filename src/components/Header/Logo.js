import React from 'react';

function Logo({...restProps}) {
    return (
        <img className="logo" {...restProps} src="./images/misc/logo.svg" width="120px" />
    )
}

export default Logo;