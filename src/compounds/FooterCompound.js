import React from 'react';
import FooterColumn from '../components/Footer/FooterColumn';
import FooterLink from '../components/Footer/FooterLink';
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
                    <FooterLink>FAQ</FooterLink>
                    <FooterLink>Investor Relations</FooterLink>
                    <FooterLink>Privacy</FooterLink>
                    <FooterLink>Speed Test</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink>Help Center</FooterLink>
                    <FooterLink>Jobs</FooterLink>
                    <FooterLink>Cookie Preferences</FooterLink>
                    <FooterLink>Legal Notices</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink>Account</FooterLink>
                    <FooterLink>Ways To Watch</FooterLink>
                    <FooterLink>Corporate Information</FooterLink>
                    <FooterLink>Netflix Originals</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink>Media Center</FooterLink>
                    <FooterLink>Terms Of Use</FooterLink>
                    <FooterLink>Contact Us</FooterLink>
                </FooterColumn>
            </FooterRow>
        </FooterWrapper>
      </>
    )
}

export default FooterCompound;