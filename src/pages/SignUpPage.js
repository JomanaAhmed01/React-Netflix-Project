import React from 'react';
import HeaderContainer from '../components/Header/HeaderContainer';
import Logo from '../components/Header/Logo';
import NavbarContainer from '../components/Header/NavbarContainer';
import SignFormBase from '../components/SignIn/SignFormBase';
import SignFormBtn from '../components/SignIn/SignFormBtn';
import SignFormCaptcha from '../components/SignIn/SignFormCaptcha';
import SignFormInput from '../components/SignIn/SignFormInput';
import SignFormLink from '../components/SignIn/SignFormLink';
import SignFormText from '../components/SignIn/SignFormText';
import SignFormTitle from '../components/SignIn/SignFormTitle';
import SignFormWrapper from '../components/SignIn/SignFormWrapper';
import FooterCompound from '../compounds/FooterCompound';

function SignUpPage() {
    return (
        <>
          <HeaderContainer className="header-con-signin">
            <NavbarContainer />
            <Logo className="logo-signin" />
            <SignFormWrapper>
              <SignFormBase>
                <SignFormTitle><h2>Sign Up</h2></SignFormTitle>
                <SignFormInput type="text" placeholder="First name" />
                <SignFormInput type="text" placeholder="Email or phone number" />
                <SignFormInput type="password" placeholder="password"/>
                <SignFormBtn>Sign Up</SignFormBtn>
                <SignFormText>Old to Netflix?</SignFormText>
                <SignFormLink><a href="/signin">Sign up.</a></SignFormLink>
                <SignFormCaptcha />
              </SignFormBase>
            </SignFormWrapper>
          </HeaderContainer>
          <FooterCompound />
        </>
    )
}

export default SignUpPage;