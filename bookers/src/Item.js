import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Item extends Component {
    
    render() {
        const {
            title,
            description,
            id,
            ...props
        } = this.props
        return(
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td><button className="btn-sm btn btn-danger"{...props}>Delete</button> | <Link to={{pathname: '/books/' + id, state: {title, description, id}}}><button className="btn-sm btn btn-success">Show</button></Link></td>
            </tr>
            
        );
    }
}

export default Item;