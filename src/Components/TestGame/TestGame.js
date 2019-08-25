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
        maxPlayer: 'x',
        minPlayer: 'o',

    }

    //VS COMPUTER
    //Test for winner
    winner = (board, player) => {
        if (
            (board[0] === player && board[1] === player && board[2] === player) ||
            (board[3] === player && board[4] === player && board[5] === player) ||
            (board[6] === player && board[7] === player && board[8] === player) ||
            (board[0] === player && board[3] === player && board[6] === player) ||
            (board[1] === player && board[4] === player && board[7] === player) ||
            (board[2] === player && board[5] === player && board[8] === player) ||
            (board[0] === player && board[4] === player && board[8] === player) ||
            (board[2] === player && board[4] === player && board[6] === player)
        ) {
            return true;
        } else {
            return false;
        }
    }
    //Test for Tie Game
    tie = (board) => {
        var moves = board.join('').replace(/ /g, '');
        if (moves.length === 9) {
            return true;
        }
        return false;
    }
    //Create a new version of the board to manipulate as a node on the tree
    copyBoard = (board) => {
        //This returns a new copy of the Board and ensures that you're only
        //manipulating the copies and not the primary board.
        return board.slice(0);
    }

    //Determine if a move is valid and return the new board state
    validMove = (move, player, board) => {
        var newBoard = this.copyBoard(board);
        if (newBoard[move] === ' ') {
            newBoard[move] = player;
            return newBoard;
        } else
            return null;
    }

    //This is the main AI function which selects the first position that
    //provides a winning result (or tie if no win possible)

    findAiMove = (board) => {
        var bestMoveScore = 100;
        let move = null;
        //Test Every Possible Move if the game is not already over.
        if (this.winner(board, 'x') || this.winner(board, 'o' || this.tie(board))) {
            return null;
        }
        for (var i = 0; i < board.length; i++) {
            let newBoard = this.validMove(i, this.state.minPlayer, board);
            //If validMove returned a valid game board
            if (newBoard) {
                var moveScore = this.maxScore(newBoard);
                if (moveScore < bestMoveScore) {
                    bestMoveScore = moveScore;
                    move = i;
                }
            }
        }
        return move;
    }

    minScore = (board) => {
        if (this.winner(board, 'x')) {
            return 10;
        } else if (this.winner(board, 'o')) {
            return -10;
        } else if (this.tie(board)) {
            return 0;
        } else {
            var bestMoveValue = 100;
            let move = 0;
            for (var i = 0; i < board.length; i++) {
                var newBoard = this.validMove(i, this.state.minPlayer, board);
                if (newBoard) {
                    var predictedMoveValue = this.maxScore(newBoard);
                    if (predictedMoveValue < bestMoveValue) {
                        bestMoveValue = predictedMoveValue;
                        move = i;
                    }
                }
            }
            //console.log("Best Move Value(minScore):", bestMoveValue);
            return bestMoveValue;
        }
    }

    maxScore = (board) => {
        if (this.winner(board, 'x')) {
            return 10;
        } else if (this.winner(board, 'o')) {
            return -10;
        } else if (this.tie(board)) {
            return 0;
        } else {
            var bestMoveValue = -100;
            let move = 0;
            for (var i = 0; i < board.length; i++) {
                var newBoard = this.validMove(i, this.state.maxPlayer, board);
                if (newBoard) {
                    var predictedMoveValue = this.minScore(newBoard);
                    if (predictedMoveValue > bestMoveValue) {
                        bestMoveValue = predictedMoveValue;
                        move = i;
                    }
                }
            }
            return bestMoveValue;
        }
    }

    gameLoop = (move) => {
        let player = this.state.turn;
        let currentGameBoard = this.validMove(move, player, this.state.gameBoard);
        if (this.winner(currentGameBoard, player)) {
            this.setState({
                gameBoard: currentGameBoard,
                winner: player,

            });
            return;
        }
        if (this.tie(currentGameBoard)) {
            this.setState({
                gameBoard: currentGameBoard,
                winner: 'draw',

            });
            return
        }
        player = 'o';
        currentGameBoard = this.validMove(this.findAiMove(currentGameBoard), player, currentGameBoard)
        if (this.winner(currentGameBoard, player)) {
            this.setState({
                gameBoard: currentGameBoard,
                winner: player,

            });
            return;
        }
        if (this.tie(currentGameBoard)) {
            this.setState({
                gameBoard: currentGameBoard,
                winner: 'draw',

            });
            return
        }
        this.setState({
            gameBoard: currentGameBoard,

        })
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
                <h1>Play Against the Computer</h1>
                    <Anouncement winner={this.state.winner} />
                </div>
                <div className='gameBox'>
                    {
                        this.state.gameBoard.map((value, i) =>
                            <Tile
                                key={i}
                                loc={i}
                                value={value}
                                updateBoard={this.gameLoop}
                                turn={this.state.turn} />)
                    }
                </div>
                <Reset reset={this.resetBoard} />
            </div>
        )
    };
};

export default TestGame;