import React from 'react';


class Effect_class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            comments: []
        };
    }

     componentDidMount() {
         document.title = `You clicked ${this.state.count} times`;
     }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count){
            document.title = `You clicked ${this.state.count} times`;
            console.log("updated");
        }
        
    }

    addComment = (item, callBack) => {
        this.setState(
            {
                comments: this.state.comments.concat(item)
            },
            callBack()
        )
    }

    render() {
        return(
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Click me
                </button>
                <button onClick={() => this.setState({count: 0})} >
                    リセット
                </button>
                
            </div>
        )
    }
}

export default Effect_class