import React, { Component } from 'react';

import './Game.css';

class Game extends Component {

    state = {
        winner: undefined,
        turn: 'X',
        board: Array(9).fill(''),
        totalMoves: 0,
        gameLocked: false,
        gameOver: false,
        
    }


    handleSquareClick= (e) => {
        if(this.state.gameOver || this.state.gameLocked) return;

        if(this.state.board[e.target.dataset.square] === '') {

            this.state.board[e.target.dataset.square] = this.state.turn;
            
            e.target.innerText = this.state.turn
            this.setState({
                turn: this.state.turn === 'X' ? 'O' : 'X',
                board: this.state.board,
            })
            console.log(this.state.board)
        }

        var result = this.handleDeclareWinner();

        if (result === 'X') {
            this.state.gameOver = true;
            this.setState({
                winner: 'X',
                winnerLine: 'Game won by X'
            });
        } else if( result === 'O') {
            this.state.gameOver = true;
            this.setState({
                winner: '0',
                winnerLine: 'Game won by O',
            });
        } else if( result === 'draw') {
            this.state.gameOver = true;
            this.setState({
                winner: 'draw',
                winnerLine: 'Game was a draw',
            })
        }
    }

    handleDeclareWinner = () => {
        var winCombos = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2] ];
        var board = this.state.board;
        for(let i = 0; i < winCombos.length; i ++) {
            if( board[ winCombos[i][0] ] === board[ winCombos[i][1] ] && board[ winCombos[i][1] ] === board[ winCombos[i][2] ] )
                return board[ winCombos[i][0] ]
        }
        console.log(this.state.totalMoves);
        if(this.state.totalMoves === 9) {
            return 'draw';
        }
    }

    render() {
        return (
            <div className='game'>
                <div className='winner'>
                
                </div>
                <div className='gameBoard'
                    onClick={(e) => this.handleSquareClick(e)}>
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