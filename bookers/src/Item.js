import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from './action.js';
import { connect } from 'react-redux';

class Item extends Component {
    
    render() {

        let books = [];
            this.props.Books.map(Book => (
                books.push(
                <tr key={Book.id} >
                    <td>{Book.id}</td>
                    <td>{Book.title}</td>
                    <td>{Book.description}</td>
                    <td><button className="btn-sm btn btn-danger" onClick={() => this.props.deleteBook(Book.id)}>Delete</button> | 
                    <Link to={{pathname: '/books/' + Book.id, state: {Book}}}><button className="btn-sm btn btn-success">Show</button></Link></td>
                </tr>)
                )
            )
        
        return <tbody>{books}</tbody>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);

