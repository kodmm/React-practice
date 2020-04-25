import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class OneBook extends Component {
    render() {
        const {
            title,
            description,
            id,
        } = this.props.location.state
        console.log(this.props)
        //const params = this.props.match
        //const id = parseInt(params.params.id, 10)
        //const book = this.props.Books.filter(e => e.id === id)[0]
        return(
            <div className="container row">
                <div className="col-md-5 col-md-offset-2 mt-5">
                    <table class="table">
                        <tr>
                            <th>Title</th>
                            <th>description</th>
                           
                        </tr>
                        <tr>
                            <td>{title}</td>
                            <td>{description}</td>
                        </tr>
                    </table>
                    <span><Link to={'/books/'}>Indexへ</Link> ｜ </span>
                </div>
            </div>
        )
    }
}

export default OneBook;