import React from 'react';
import OptFormWrapper from '../components/OptForm/OptFormWrapper'
import OptFormText from '../components/OptForm/OptFormText'
import OptFormEmail from '../components/OptForm/OptFormEmail'

function OptFormCompound() {
    return (
        <OptFormWrapper>
           <OptFormText />
           <OptFormEmail />
        </OptFormWrapper>
    )
}

export default OptFormCompound;