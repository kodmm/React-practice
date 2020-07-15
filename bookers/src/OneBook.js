import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps} from './action.js'
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

        return(
            <div className="container row">
                {this.state.isEdit
                    ? <EditBook  isEdit = {this.state.isEdit} Book = {this.props.location.state.Book} />
                    : <ShowBook state = {this.props.location.state.Book}/>
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

        return(
            
                <div className="col-md-5 col-md-offset-2 mt-5">
                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                           
                        </tr>
                        <tr>
                            <td>{this.props.state.id}</td>
                            <td>{this.props.state.title}</td>
                            <td>{this.props.state.description}</td>
                        </tr>
                    </table>
                    
                </div>
          
        )
    }
}


class EditBook extends Component {
    render() {
        console.log(this.props)
        return(

                <div class="col-md-5 col-md-offset-2 mt-5">
                    <form 
                                onSubmit={e => {
                                    //formのデフォルトイベントをキャンセル
                                    e.preventDefault();

                                    this.props.updateBook({
                                        id: this.props.Book.id,
                                        title: e.target.elements["title"].value,
                                        description: e.target.elements["description"].value
                                    })

                                    this.state.isEdit = false
                                }}
                    >
                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                                <td><input
                                        id="title"
                                        type="text"
                                        value={this.props.Book.title }
                                        placeholder="Title"
                                    />
                                </td>
                                <td>
                                    <textarea 
                                        value={this.props.Book.description}
                                        id="title"
                                        placeholder="description"
                                    />
                                </td>
                                <td><button type="submit">UPDATE</button></td>
                        </tr>
                    </table>
                    </form>
                </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneBook);