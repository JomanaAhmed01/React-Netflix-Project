import React from 'react';
import JumboItem from '../components/Jumbo/JumboItem';
import JumboTextWrapper from '../components/Jumbo/JumboTextWrapper';
import JumboTitle from '../components/Jumbo/JumboTitle';
import JumboWrapper from '../components/Jumbo/JumboWrapper';

function JumboCompound() {
    return (
        <JumboWrapper>
            <JumboItem />
            <JumboTextWrapper />
            <JumboTitle />
        </JumboWrapper>
    )
}

export default JumboCompound;