import React from 'react';
import JumboImage from '../components/Jumbo/JumboImage';
import JumboImageWrapper from '../components/Jumbo/JumboImageWrapper';
import JumboItem from '../components/Jumbo/JumboItem';
import Seperator from '../components/Jumbo/Seperator';
import JumboSubTitle from '../components/Jumbo/JumboSubTitle';
import JumboTextWrapper from '../components/Jumbo/JumboTextWrapper';
import JumboTitle from '../components/Jumbo/JumboTitle';
import JumboWrapper from '../components/Jumbo/JumboWrapper';

function JumboCompound() {
    return (
        <JumboWrapper>
            <JumboItem>
                <JumboTextWrapper>
                    <JumboTitle>Enjoy on your TV.</JumboTitle>
                    <JumboSubTitle>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</JumboSubTitle>
                </JumboTextWrapper>

                <JumboImageWrapper>
                    <JumboImage className="jumbo-img" src="./images/misc/home-tv.jpg" />
                </JumboImageWrapper>
            </JumboItem>
            <Seperator />
            <JumboItem>
                <JumboTextWrapper>
                   <JumboTitle>Download your shows to watch offline.</JumboTitle>
                   <JumboSubTitle>Save your favorites easily and always have something to watch.</JumboSubTitle>
                </JumboTextWrapper>

                <JumboImageWrapper>
                    <JumboImage className="home-mobile" src="./images/misc/home-mobile.jpg" />
                </JumboImageWrapper>
            </JumboItem>
            <Seperator />
            <JumboItem>
                <JumboTextWrapper>
                <JumboTitle>Watch everywhere.</JumboTitle>
                <JumboSubTitle>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</JumboSubTitle>
                </JumboTextWrapper>

                <JumboImageWrapper>
                    <JumboImage className="jumbo-img" src="./images/misc/home-imac.jpg" />
                </JumboImageWrapper>
            </JumboItem>
            <Seperator />
        </JumboWrapper>
    )
}

export default JumboCompound;