import React from 'react';
import { useHistory } from "react-router-dom"

function Logo({...restProps}) {
    const history = useHistory()

    return (
      <div
        onClick={() => history.push("/")}
        className="logo"
        {...restProps}
      >
        <img src="./images/misc/logo.svg" width="120px" />
      </div>
    )
}

export default Logo;