import React, { Component } from 'react';

import './Anouncement.css'


class Anouncement extends Component {



    render() {
        let anouncementClass = 'hidden';
        if(this.props.winner) {
            anouncementClass = 'anouncement';
        }
        return(
            <div className={anouncementClass}>
                <h2>Game Over</h2>
            </div>
        )
    };
};

export default Anouncement;