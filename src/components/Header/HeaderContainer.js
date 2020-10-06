import React from 'react';

function HeaderContainer({children, ...restProps}) {
    return (
        <div className="header-con" {...restProps}>{children}</div>
    )
}

export default HeaderContainer;