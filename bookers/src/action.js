export function mapStateToProps(state) {
    return state;
}


export function mapDispatchToProps(dispatch) {
    return {
        
        /* To post a book */
        postBook: (text) => {
            dispatch( {type: 'POST_BOOK', text: text});
        },
        
        /* hold writing down title of textbox in state.text */
        changeTitle: (title) => {
            dispatch( {type: 'CHANGE_TITLE', title: title});
        },
        
        changeDescription: (description) => {
            dispatch( {type: 'CHANGE_DESCRIPTION', description: description});
        },

        //Delete a book
        deleteBook: (BookId) => {
            dispatch({type: 'DELETE_BOOK', id: BookId})
        }

    }
}