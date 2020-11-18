import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps} from './action.js';
import EditBook from "./EditBook.js";

class OneBook extends Component {
    
    state= {
        isEdit: false

    }

    // Change of Component 
    editMode = () => {
        this.setState(
            {
                isEdit: !this.state.isEdit
            }
        )
        console.log(this.state.isEdit)
    }

    render() {
        console.log(this.props.Books);
        return(
            
            <div className="container row">
                {this.state.isEdit
                    ? <EditBook  isEdit = {this.state.isEdit} Book = {this.props.location.state.Book} editMode = {this.editMode}/>
                    : <ShowBook Book_id = {this.props.location.state.Book.id - 1} Books = {this.props.Books} />
                }
                
                <div>
                
                    <Link to={'/books/'}>Indexへ</Link> ｜ <button onClick={() => this.editMode()}>{this.state.isEdit ? 'Show': 'Edit'}</button>
                </div>
                
            </div>
        )
    }
}

class ShowBook extends Component {
    render() {
        const book = this.props.Books[this.props.Book_id];
        return(
            
                <div className="col-md-5 col-md-offset-2 mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.description}</td>
                            </tr>
                        </tbody>
                        
                    </table>
                    
                </div>
          
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(OneBook);

