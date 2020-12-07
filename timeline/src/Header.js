import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2 style={{marginTop: "4px"}}>Welcome to React </h2>

                <a href="/hello">ご挨拶</a>:
                <a href="/about/1">1について</a>:
                <a href="/about/2">2について</a>:
                <a href="/">タイムライン</a>:
            </div>
        );
    }
}

export default Header;