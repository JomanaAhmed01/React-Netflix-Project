import React from 'react';
import OptFormWrapper from '../components/OptForm/OptFormWrapper'
import OptFormText from '../components/OptForm/OptFormText'
import OptFormEmail from '../components/OptForm/OptFormEmail'
import OptFormBtn from '../components/OptForm/OptFormBtn';

function OptFormCompound() {
    return (
        <OptFormWrapper>
           <OptFormText />
           <OptFormEmail />
           <OptFormBtn />
        </OptFormWrapper>
    )
}

export default OptFormCompound;