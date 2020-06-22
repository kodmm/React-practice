import React, { Component } from 'react'
import Item from "./Item.js"
import './index.css'
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps} from './action.js'

class Books extends Component {
  
    render() {
      return(
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-2">
              <section className="Books-index">
                <h1>Books</h1>
                <table className="table" border="1">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Body</th>
                      <th></th>
                    </tr>
                  </thead>
                
                    <Item />
             
                </table>
              </section>
            </div>
          </div>
          
          <div className="row col-md-5 col-md-offset-2">
            <section className="Book-Post">
              <form className="Book-form"
                onSubmit={e => {
                  //formのデフォルトイベントをキャンセル
                  e.preventDefault();
  
                 this.props.postBook({
                   id: this.props.id,
                   title: this.props.title,
                   description: this.props.description
                 })
                }}
              >
                <div>
                 {this.props.title}
                  <input 
                    id="title" 
                    type="text"
                    value={this.props.title}
                    onChange = {(e) => this.props.changeTitle(e.target.value)} 
                    placeholder="title"
                  />
                  {this.props.description}
                  <textarea 
                    id="description" 
                    value={this.props.description}
                    onChange = {(e) => this.props.changeDescription(e.target.value)}
                    placeholder="description"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                  >
                    投稿
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      )
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Books);