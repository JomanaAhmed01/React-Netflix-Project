import React from 'react';
import { useHistory } from 'react-router-dom'

function SigninBtn() {
    const history = useHistory()

    return (
        <div onClick={() => history.push('/signin')} className="signin-btn">Sign In</div>
    )
}

export default SigninBtn;