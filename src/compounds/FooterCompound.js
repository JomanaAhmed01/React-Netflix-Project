import React from 'react';
import FooterTitle from '../components/Footer/FooterTitle';
import FooterWrapper from "../components/Footer/FooterWrapper";
import Seperator from '../components/Jumbo/Seperator';

function FooterCompound() {
    return (
      <>
        <Seperator />
        <FooterWrapper>
            <FooterTitle />
        </FooterWrapper>
      </>
    )
}

export default FooterCompound;