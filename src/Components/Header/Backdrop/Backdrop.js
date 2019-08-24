import React from 'react';

import './backdrop.css'

const Backdrop = (props) => (
    <div className='backdrop' onClick={() => props.closeBackdrop()}>

    </div>
);

export default Backdrop;
