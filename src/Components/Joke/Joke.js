import React, { Component } from 'react';
import axios from 'axios';

import './Joke.css';


class Joke extends Component {


    state = {
        joke: '',

    }

    componentDidMount() {
        this.handleChuckJoke();
    }

    handleChuckJoke() {
        axios.get('http://api.icndb.com/jokes/random').then(results => {
            this.setState({
                joke: results.data.value.joke
            })
        })
    }

    render() {
        console.log(this.state.joke)

        return (
            <div className='footer'>
                <div className='joke'>
                    <p>{this.state.joke}</p>
                </div>
                <div className='newJokeButton'>
                    <button onClick={() => this.handleChuckJoke()}>New Joke</button>
                </div>
            </div>
        )
    };
};

export default Joke;