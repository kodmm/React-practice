import React from 'react';

class To_prevState extends React.Component {
    state = {
        count: 0
    };

    Increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
       
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        
    }
    
    IncrementWithoutPrevState = () => {
        this.setState(() => ({
            count: this.state.count + 1
        }));
        console.log(this.state.count);
        this.setState(() => ({
            count: this.state.count + 1
        }));
        console.log(this.state.count);
        this.setState(() => ({
            count: this.state.count + 1
        }));
        console.log(this.state.count);
        this.setState(() => ({
            count: this.state.count + 1
        }));
        console.log(this.state.count);
        this.setState(() => ({
            count: this.state.count + 1
        }));
        console.log(this.state.count);
    
    }

    render() {
        return(
            <div>
                <button onClick={this.IncrementWithoutPrevState}>
                    Increment 4 times without PrevState
                </button>
                <button onClick={this.Increment}>
                    Increment 4 times with PrevState
                </button>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.setState({
                    count: 0
                })}>
                    初期化
                </button>
            </div>
        )
    }
}

export default To_prevState 