import React, { Component } from 'react';

import '../TestGame/TestGame.css'
import Anouncement from '../TestGame/TestComponents/Anouncement/Anouncement';
import Reset from '../TestGame/TestComponents/Reset/Reset';
import Tile from '../TestGame/TestComponents/Tile/Tile';

class TwoPlayerGame extends Component {

    state = {
        gameBoard: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
        turn: 'x',
        winner: null,
        maxPlayer: 'x',
        minPlayer: 'o',

    }

    // 2 PLAYER
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

        //DETERMIN GAME OUTCOME
        this.setState({ gameBoard: currentGameBoard }, () => {
            //CHECK IF THERe IS A WINNER OR A DRAW
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
        });
    }

    tie = (board) => {
        var moves = board.join('').replace(/ /g, '');
        if( moves.length === 9 ) {
            return true;
        }
        return false;
    }

    resetBoard = () => {
        this.setState({
            gameBoard: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
            turn: 'x',
            winner: null,
            maxPlayer: 'x',
            minPlayer: 'o',
        })
    };

    render() {
        return (
            <div className='testGame'>
                <div className='anouncementBox'>
                    <h1>Two Player Game</h1>
                    <Anouncement winner={this.state.winner} />
                </div>
                <div className='gameBox'>
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
                <Reset reset={this.resetBoard} />
            </div>
        )
    };
};

export default TwoPlayerGame;