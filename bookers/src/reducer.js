const initialState = {
    title: "",
    description: "",
    Books: JSON.parse(localStorage.getItem("Books")) || [],
    id: JSON.parse(localStorage.getItem("id")) || 1
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
      
        /* To post a book */
        case 'POST_BOOK':
            return {
                ...state,
                title: "",
                description: "",
                Books: [...state.Books, action.text],
                id: state.id + 1, 
                
            };
            
        
        /* To hold writing down title of textbox */
        case 'CHANGE_TITLE':
            return {
                ...state,
                title: action.title
            };
        
        case 'CHANGE_DESCRIPTION':
            return {
                ...state,
                description: action.description
            };
            /* Delete book */
        case 'DELETE_BOOK':

            return {
                ...state,
                 Books: state.Books.filter(x => x.id !== action.id),
                 //localStorage.setItem("Books", JSON.stringify(Books))
            };
        
        case 'UPDATE_BOOK':
            console.log(action.book.id)
            
            return {
                ...state,
                Books: state.Books.forEach((book, index) => {
                    console.log(book.id)
                    if(book.id === action.book.id){
                        state.Books[index] = action.book
                        console.log('updated' + state.Books[index]);
                    }
                }),
                title: "",
                description: ""
            };
        default:
            return state

    }
}
