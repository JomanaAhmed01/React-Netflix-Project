import React from 'react';
import JumboItem from '../components/Jumbo/JumboItem';
import JumboTextWrapper from '../components/Jumbo/JumboTextWrapper';
import JumboWrapper from '../components/Jumbo/JumboWrapper';

function JumboCompound() {
    return (
        <JumboWrapper>
            <JumboItem />
            <JumboTextWrapper />
        </JumboWrapper>
    )
}

export default JumboCompound;