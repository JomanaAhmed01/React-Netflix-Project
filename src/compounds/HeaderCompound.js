import React from 'react';
import HeaderContainer from '../components/HeaderContainer';
import Logo from '../components/Header/Logo.js';
import NavbarContainer from '../components/Header/NavbarContainer';
import SigninBtn from '../components/Header/SigninBtn';
import FeatureWrapper from '../components/Feature/FeatureWrapper';
import FeatureTitle from '../components/Feature/FeatureTitle';

function HeaderCompund() {
    return (
        <HeaderContainer>
            <NavbarContainer>
                <Logo />
                <SigninBtn />
            </NavbarContainer>

            <FeatureWrapper>
                <FeatureTitl />
            </FeatureWrapper>
        </HeaderContainer>
    )
}

export default HeaderCompund;