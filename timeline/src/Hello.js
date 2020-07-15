import React, { Component } from 'react';
import './App.css';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }

    render() {
        return(
            <div className="Hello">
                <h1>ここはHello</h1>
                <p>うまくルーティングできたかな？</p>
            </div>
        );
    }
}

export default Hello;