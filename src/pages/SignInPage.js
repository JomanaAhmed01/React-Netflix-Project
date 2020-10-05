import React from 'react';
import HeaderWrapper from '../components/Header/HeaderWrapper'
import Logo from '../components/Header/Logo';
import NavbarContainer from '../components/Header/NavbarContainer';
import FooterCompound from '../compounds/FooterCompound'

function SignInPage() {
    return (
        <>
          <HeaderWrapper />
          <NavbarContainer />
          <Logo />
          <FooterCompound />
        </>
    )
}

export default SignInPage;