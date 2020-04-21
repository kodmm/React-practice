import React, { Component } from 'react';

class Item extends Component {
    
    render() {
        const {
            key,
            title,
            description,
            ...props
        } = this.props;
        console.log(this.props);

        return(
            <tr>
                <td>{key}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td><button className="btn-sm btn btn-danger"{...props}>削除</button></td>
            </tr>
            
        );
    }
}

export default Item;