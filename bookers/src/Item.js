import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from './action.js';
import { connect } from 'react-redux';

class Item extends Component {
    
    render() {
        let books = [];
        console.log(this.props.Books);
        for (let i in this.props.Books) {
            books.push(
            <tr key={this.props.Books[i].id}>
                <td>{this.props.Books[i].id}</td>
                <td>{this.props.Books[i].title}</td>
                <td>{this.props.Books[i].description}</td>
                <td><button className="btn-sm btn btn-danger" onClick={() => this.props.deleteBook(this.props.Books[i])}>Delete</button> | 
                <Link to={{pathname: '/books/' + this.props.Books[i].id}}><button className="btn-sm btn btn-success">Show</button></Link></td>
            </tr>)
        }
        return <tbody>{books}</tbody>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);

