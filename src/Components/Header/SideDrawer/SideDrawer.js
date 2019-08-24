import React from 'react';
import { Link } from 'react-router-dom';

import './sideDrawer.css';


const SideDrawer = (props) => {

    let drawerClasses = 'sideDrawer';
    if (props.display) {
        drawerClasses = 'sideDrawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <Link to='/' onClick={() => props.closeBackdrop()}>Rules</Link>
                </li>
                <li>
                    <Link to='/game' onClick={() => props.closeBackdrop()}>Game</Link>
                </li>
                <li>
                    <Link to='/test_game' onClick={() => props.closeBackdrop()}>Test Game</Link>
                </li>
            </ul>
        </nav>
    )
};

export default SideDrawer;