import React from 'react';
import HeaderContainer from '../components/Header/HeaderContainer';
import Logo from '../components/Header/Logo';
import NavbarContainer from '../components/Header/NavbarContainer';
import SignFormWrapper from '../components/SignIn/SignFormWrapper';
import FooterCompound from '../compounds/FooterCompound';

function SignInPage() {
    return (
        <>
          <HeaderContainer className="header-con-signin">
            <NavbarContainer />
            <Logo className="logo-signin" />
          </HeaderContainer>
          <SignFormWrapper />
          <FooterCompound />
        </>
    )
}

export default SignInPage;