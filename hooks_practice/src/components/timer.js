import React from 'react';
import '../styles/counter.css';


class timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };

    }

    componentDidMount(){
        this.TimerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentDidUnmount(){
        clearInterval(this.TimerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return(
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>

            </div>
        )
    }
}

export default timer;