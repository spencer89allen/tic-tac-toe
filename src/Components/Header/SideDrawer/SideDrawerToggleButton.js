import React from 'react';

import './sideDrawerToggleButton.css';



const sideDrawerToggleButton = (props) => (
    <button className='toggle-button' onClick={() => props.drawerToggle()}>
        <div className='toggle-button_line'></div>
        <div className='toggle-button_line'></div>
        <div className='toggle-button_line'></div>
    </button>
);

export default sideDrawerToggleButton;