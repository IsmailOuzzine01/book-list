export const BookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK' : 
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: Math.random()*100
            }];
        case 'REMOVE_BOOK' : 
            return state.filter(book => book.id !== action.id);
        default :
            return state;
    }
}