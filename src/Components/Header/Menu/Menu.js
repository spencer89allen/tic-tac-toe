import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';
import SideDrawerToggleButton from '../SideDrawer/SideDrawerToggleButton';


const Menu = (props) => (
    <header className='menu'>
        <nav className='menu_nav'>
            <div className='toggleButton'>
                <SideDrawerToggleButton drawerToggle={props.drawerToggle}/>
            </div>
            <div className='menu_logo'><a href="/">Tic Tac Toe</a></div>
            <div className='spacer'></div>
            <div className='menu_items'>
                <ul>
                    <li>
                        <Link to='/'>Rules</Link>
                    </li>
                    <li>
                        <Link to='/game'>Game</Link>
                    </li>
                    <li>
                        <Link to='/test_game'>Test Game</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Menu;