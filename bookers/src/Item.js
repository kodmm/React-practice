import React, { Component } from 'react';

class Item extends Component {
    render() {
        const {
            title,
            description,
            ...props
        } = this.props;


        return(
            <tr>
                <td>{title}</td>
                <td>{description}</td>
                <td><button className="btn-sm btn btn-danger" {...props}>削除</button></td>
            </tr>
        );
    }
}

export default Item;