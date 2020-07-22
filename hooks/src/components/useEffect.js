import React, { Component } from 'react'

class EffectClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }

    }

    componentDidMount() {
        document.title = `${this.state.count}回クリックされました`
    }

    componentDidUpdate() {
        document.title = `${this.state.count}回クリックされました。`
    }

    render() {
        return(
            <>
                <h2>Class component</h2>
                <p>{`${this.state.count}回クリックされました`}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})} >
                    ボタン
                </button>
                <button onClick={() => this.setState({count: 0})} >
                    リセット
                </button>
            </>
        )
    }
}

export default EffectClass
