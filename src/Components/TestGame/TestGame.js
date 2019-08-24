import React, { Component } from 'react';

import './TestGame.css'
import Anouncement from './TestComponents/Anouncement/Anouncement';
import Reset from './TestComponents/Reset/Reset';
import Tile from './TestComponents/Tile/Tile';

class TestGame extends Component {

    state = {
        gameBoard: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
        turn: 'x',
        winner: null,

    }


    updateBoard = (loc, player) => {

        //Game Over!
        console.log('winner:', this.state.winner, 'turn:', this.state.turn, 'gameBoard:', this.state.gameBoard);
        if (this.state.winner !== null) {
            //make game over component visible
            console.log("Winner:", this.state.winner);
            return;
        }

        if (this.state.gameBoard[loc] === 'x' || this.state.gameBoard[loc] === 'o') {
            //invalid move
            return;
        }

        //CREATE A GAMEBOARD
        let currentGameBoard = this.state.gameBoard;

        currentGameBoard.splice(loc, 1, this.state.turn);

        this.setState({ gameBoard: currentGameBoard },  () => {
            //CHECK IF THER IS A WINNER OR A DRAW
            var moves = this.state.gameBoard.join('').replace(/ /g, '');

            console.log('Moves:', moves, 'Winner:', this.state.winner);

            if (moves.length === 9) {
                this.setState({ winner: 'draw' });
                //Make game over component visible
                return;
            } else {

                var topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
                if (topRow.match(/xxx|ooo/)) {
                    this.setState({ winner: this.state.turn });
                    return;
                }

                var middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
                if (middleRow.match(/xxx|ooo/)) {
                    this.setState({ winner: this.state.turn });
                    return;
                }

                var bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
                if (bottomRow.match(/xxx|ooo/)) {
                    this.setState({ winner: this.state.turn });
                    return;
                }

                var leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
                if (leftCol.match(/xxx|ooo/)) {
                    this.setState({ winner: this.state.turn });
                    return;
                }

                var middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
                if (middleCol.match(/xxx|ooo/)) {
                    this.setState({ winner: this.state.turn });
                    return;
                }

                var rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
                if (rightCol.match(/xxx|ooo/)) {
                    this.setState({ winner: this.state.turn });
                    return;
                }

                var leftDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
                if (leftDiag.match(/xxx|ooo/)) {
                    this.setState({ winner: this.state.turn });
                    return;
                }

                var rightDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
                if (rightDiag.match(/xxx|ooo/)) {
                    this.setState({ winner: this.state.turn });
                    return;
                }

                this.setState({ 
                    turn: (this.state.turn === 'x') ? 'o' : 'x' 
                });
            }
        }, );
    }

    resetBoard = () => {
        this.setState({
            gameBoard: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
            turn: 'x',
            winner: null,
        })
    }

    render() {
        return (
            <div className='testGame'>
                <div className='menu'>
                    <Anouncement winner={this.state.winner} />
                    <Reset reset={this.resetBoard} />
                </div>
                <div>
                    {
                        this.state.gameBoard.map((value, i) =>
                            <Tile
                                key={i}
                                loc={i}
                                value={value}
                                updateBoard={this.updateBoard}
                                turn={this.state.turn} />)
                    }
                </div>
            </div>
        )
    };
};

export default TestGame;