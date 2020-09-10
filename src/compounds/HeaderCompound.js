import React from 'react';
import HeaderContainer from '../components/HeaderContainer';
import Logo from '../components/Header/Logo.js';
import NavbarContainer from '../components/Header/NavbarContainer';
import SigninBtn from '../components/Header/SigninBtn';

function HeaderCompund() {
    return (
        <HeaderContainer>
            <NavbarContainer>
                <Logo />
                <SigninBt />
            </NavbarContainer>
        </HeaderContainer>
    )
}

export default HeaderCompund;