import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps} from './action.js'

class EditBook extends Component {

    render() {
        console.log(this.props)
        return(

                <div className="col-md-5 col-md-offset-2 mt-5">
                    <form 
                                onSubmit={e => {
                                    //formのデフォルトイベントをキャンセル
                                    e.preventDefault();
                                    const titleElement = e.target.elements["title"];
                                    const descriptionElement = e.target.elements["description"];
                                    console.log(titleElement);
                                    console.log(descriptionElement);

                                    this.props.updateBook({
                                        id: this.props.Book.id,
                                        title: titleElement.value,
                                        description: descriptionElement.value,
                                    })

                                    this.props.editMode()
                                }}
                    >
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
                                    <td><input
                                            id="title"
                                            type="text"
                                            defaultValue={this.props.Book.title}
                                            placeholder="Title"
                                        />
                                    </td>
                                    <td>
                                        <textarea
                                            defaultValue = {this.props.Book.description}
                                            // value={this.props.description}
                                            // onChange = {(e) => this.props.changeDescription(e.target.value)}
                                            id="description"
                                            placeholder="description"
                                        />
                                    
                                    </td>
                                    <td><button type="submit">UPDATE</button></td>
                            </tr>
                        </tbody>
                        
                    </table>
                    </form>
                </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);


