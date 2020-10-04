import React from 'react';
import FooterRow from '../components/Footer/FooterRow';
import FooterTitle from '../components/Footer/FooterTitle';
import FooterWrapper from "../components/Footer/FooterWrapper";
import Seperator from '../components/Jumbo/Seperator';

function FooterCompound() {
    return (
      <>
        <Seperator />
        <FooterWrapper>
            <FooterTitle />

            <FooterRow>
                
            </FooterRow>
        </FooterWrapper>
      </>
    )
}

export default FooterCompound;