export function mapStateToProps(state) {
    return state;
}

export function mapDispatchToProps(dispatch) {
    return {
        /* ツイートを投稿する */
        postTweet: (text) => {
            dispatch( {type: 'POST_TWEET', text: text} );
        },

        /* ツイートを書き込むテキストボックスの内容をstate.textに保持する */
        changeText: (text) => {
            dispatch( {type: 'CHANGE_TEXT', text: text} );
        }
    }
}

