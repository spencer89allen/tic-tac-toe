import React, { Component } from 'react';
import axios from 'axios';

import './Joke.css';


class Joke extends Component {


    state = {
        seinfeldQuotes: '',
        author: '',
    }



    componentDidMount() {
        this.handleGetQuote();
    }

    handleGetQuote() {
        axios.get('https://seinfeld-quotes.herokuapp.com/random').then(res => {
            this.setState({
                seinfeldQuotes: res.data.quote,
                author: res.data.author,
            })
        })
    }


    render() {
        console.log(this.state)

        return (
            <div className='footer'>
                <div className='joke'>
                    <h1>Bored with Tic Tac Toe? </h1>
                    <br />
                    <h4>{this.state.seinfeldQuotes}</h4>
                    <p>-{this.state.author}</p>
                </div>
                <div className='newJokeButton'>
                    <button onClick={() => this.handleGetQuote()}>Find New Quote</button>
                </div>
            </div>
        )
    };
};

export default Joke;