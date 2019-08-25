import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Header from './Components/Header/Header'
import TwoPlayerGame from './Components/Game/TwoPlayerGame';
import Rules from './Components/Rules/Rules';
import TestGame from './Components/TestGame/TestGame';




export default (

    <div>
        {/* <Route component={ Header } path='/' /> */}
        <Switch>
            <Route component={ TwoPlayerGame } path='/game' />
            <Route component={ TestGame } path='/test_game' />
            <Route component={ Rules } path='/' />
        </Switch>
    </div>
)