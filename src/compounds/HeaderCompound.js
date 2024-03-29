import React from 'react';
import HeaderContainer from '../components/Header/HeaderContainer';
import Logo from '../components/Header/Logo.js';
import NavbarContainer from '../components/Header/NavbarContainer';
import SigninBtn from '../components/Header/SigninBtn';
import FeatureWrapper from '../components/Feature/FeatureWrapper';
import FeatureTitle from '../components/Feature/FeatureTitle';
import FeatureSubtitle from '../components/Feature/FeatureSubtitle';
import OptFormCompound from './OptFormCompound';

function HeaderCompund() {
    return (
        <HeaderContainer>
            <NavbarContainer>
                <Logo />
                <SigninBtn />
            </NavbarContainer>

            <FeatureWrapper>
                <FeatureTitle />
                <FeatureSubtitle />
            </FeatureWrapper>

            <OptFormCompound />
        </HeaderContainer>
    )
}

export default HeaderCompund;