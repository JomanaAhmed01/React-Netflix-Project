import React from 'react';
import JumboImage from '../components/Jumbo/JumboImage';
import JumboImageWrapper from '../components/Jumbo/JumboImageWrapper';
import JumboItem from '../components/Jumbo/JumboItem';
import JumboSubTitle from '../components/Jumbo/JumboSubTitle';
import JumboTextWrapper from '../components/Jumbo/JumboTextWrapper';
import JumboTitle from '../components/Jumbo/JumboTitle';
import JumboWrapper from '../components/Jumbo/JumboWrapper';

function JumboCompound() {
    return (

      <>
        <JumboWrapper>
            <JumboItem>
                <JumboTextWrapper>
                    <JumboTitle />
                    <JumboSubTitle />
                </JumboTextWrapper>

                <JumboImageWrapper>
                    <JumboImage />
                </JumboImageWrapper>
            </JumboItem>
        </JumboWrapper>
      </>
    )
}

export default JumboCompound;