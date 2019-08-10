import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';
// reducer function -> interacts with the state/data
// action -> describes the type of change we want to make in the reducer
// dispatch -> sends the action to the reducer
// dispatch({ type: 'ADD_BOOK', book:{title: '', author: ''} }) -> reducer function
// reducer(action, state) - check the action.type, update the state object, return the state -> provider value
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] =  useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);
    return (
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
    
}

export default BookContextProvider;