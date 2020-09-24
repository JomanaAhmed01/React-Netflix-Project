import React from 'react';
import JumboItem from '../components/Jumbo/JumboItem';
import JumboSubTitle from '../components/Jumbo/JumboSubTitle';
import JumboTextWrapper from '../components/Jumbo/JumboTextWrapper';
import JumboTitle from '../components/Jumbo/JumboTitle';
import JumboWrapper from '../components/Jumbo/JumboWrapper';

function JumboCompound() {
    return (

      <>
        <JumboWrapper>
            <JumboItem />
        </JumboWrapper>

        <JumboTextWrapper>
            <JumboTitle />
            <JumboSubTitle />
        </JumboTextWrapper>

      </>
    )
}

export default JumboCompound;