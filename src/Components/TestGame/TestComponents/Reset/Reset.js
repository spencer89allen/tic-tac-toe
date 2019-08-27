import React, { Component } from 'react';

import './Reset.css'



class Reset extends Component {



    tileClick = (props) => {
        props.updatBoard(props.loc, props.turn)
    }

    render(){
        return (
            <div className='reset'>
                <br />
                <button onClick={this.props.reset}>RESET</button>
            </div>
        )
    };
};

export default Reset;