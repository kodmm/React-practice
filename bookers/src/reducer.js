const initialState = {
    title: "",
    description: "",
    Books: JSON.parse(localStorage.getItem("Books")) || [],
    id: JSON.parse(localStorage.getItem("id")) || 1
}

export default function reducer(state = initialState, action) {
    let  newBooks = [];
    switch(action.type) {
       
        /* To post a book */
        case 'POST_BOOK':
            
            newBooks = [...state.Books, action.text];
            localStorage.setItem("Books", JSON.stringify(newBooks));
            return {
                ...state,
                title: "",
                description: "",
                Books: newBooks,
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
            newBooks = state.Books.filter(x => x.id !== action.id);
            localStorage.setItem("Books", JSON.stringify(newBooks));
            return {
                ...state,
                 Books: newBooks,
                 
            };
        
        case 'UPDATE_BOOK':
            console.log(state.Books);
            newBooks = state.Books.map(book => {
                console.log(typeof(book.id), typeof(action.book.id));
                
                if(book.id === action.book.id){
                    
                    book = action.book
                }
                return book
            });
            console.log("update");
            console.log(state.Books);
            console.log(newBooks);
            localStorage.setItem("Books", JSON.stringify(newBooks));
            return {
                ...state,
                Books: newBooks,
                title: "",
                description: ""
            };
        default:
            return state

    }
}
