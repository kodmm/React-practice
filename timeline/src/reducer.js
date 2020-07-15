const initialState = {
    timeline: [],
    text: ""
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        /* ツイートを投稿する */
        case 'POST_TWEET':
            return {
                ...state,
                text: "",
                timeline: [action.text, ...state.timeline]
            };

        /* ツイートを書き込むテキストボックスの内容を保持する */
        case 'CHANGE_TEXT':
            return {
                ...state,
                text: action.text
            };

        default:
            return state
    }
}