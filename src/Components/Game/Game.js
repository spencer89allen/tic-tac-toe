import React, { Component } from 'react';

import './Game.css'

class Game extends Component {



    render() {
        return (
            <div className='game'>
                <div className='winner'>
                
                </div>
                <span className='title'>
                    Tic Tac Toe
                </span>
                <br />
                <div className='gameBoard'>
                    <div className='square' data-square='0'></div>
                    <div className='square' data-square='1'></div>
                    <div className='square' data-square='2'></div>
                    <div className='square' data-square='3'></div>
                    <div className='square' data-square='4'></div>
                    <div className='square' data-square='5'></div>
                    <div className='square' data-square='6'></div>
                    <div className='square' data-square='7'></div>
                    <div className='square' data-square='8'></div>
                </div>
            </div>
        )
    }
}

export default Game;