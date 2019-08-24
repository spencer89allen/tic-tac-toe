import React, { Component } from 'react';

import './Reset.css'



class Reset extends Component {



    tileClick = (props) => {
        props.updatBoard(props.loc, props.turn)
    }

    render(){
        return (
            <div className='reset'>
                <button onClick={this.props.reset}>Reset</button>
            </div>
        )
    };
};

export default Reset;