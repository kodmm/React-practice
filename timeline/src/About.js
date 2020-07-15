import React, { Component } from 'react';
import './App.css';

class About extends Component {

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    このアプリケーションはReactの勉強用に作りました。<br /><br />
                    ちなみに渡された値は{ this.props.match.params.number }
                </p>
            </div>
        )
    }
}

export default About;

