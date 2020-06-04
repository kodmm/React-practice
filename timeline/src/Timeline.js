import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from './action.js';

class Timeline extends Component {
    render() {
        let tweets = [];
        for(let i in this.props.timeline) {
            tweets.push(<li>{this.props.timeline[i]}</li>)
        }

        return <ul>{tweets}</ul>
    }
}

export default connect(mapStateToProps)(Timeline);

