import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps } from './action.js';

class OneBook extends Component {
    render() {
        console.log(this.props)
        return(
            <div className="container row">
                <div className="col-md-5 col-md-offset-2 mt-5">
                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>description</th>
                           
                        </tr>
                        <tr>
                            <td>{this.props.location.state.Book.id}</td>
                            <td>{this.props.location.state.Book.title}</td>
                            <td>{this.props.location.state.Book.description}</td>
                        </tr>
                    </table>
                    <span><Link to={'/books/'}>Indexへ</Link> ｜ </span>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(OneBook);