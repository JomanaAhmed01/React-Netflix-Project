import React from 'react';
import FooterColumn from '../components/Footer/FooterColumn';
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
                <FooterColumn>
                    
                </FooterColumn>
            </FooterRow>
        </FooterWrapper>
      </>
    )
}

export default FooterCompound;