import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'Pro React', id: 1 },
        { title: 'React Quickly', id: 2 },
        { title: 'Road to React', id: 3 },
        { title: 'React & React Native', id: 4 },
    ]);

    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;