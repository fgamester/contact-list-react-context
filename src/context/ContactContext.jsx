import React, { createContext, useState } from "react";

export const Context = createContext(null);

export const AppContext = ({ children }) => {

    const [store, setStore] = useState({
        contacts: [{
            name: 'Mike Anamendolla',
            phone: '(870) 288-4149',
            email: 'mike.ana@example.com',
            address: '5842 Hillcrest Rd',
            id: 1
        },
        {
            name: 'Mike Anamendolla',
            phone: '(870) 288-4149',
            email: 'mike.ana@example.com',
            address: '5842 Hillcrest Rd',
            id: 2
        },
        {
            name: 'Mike Anamendolla',
            phone: '(870) 288-4149',
            email: 'mike.ana@example.com',
            address: '5842 Hillcrest Rd',
            id: 3
        }]
    });
    const [actions, setActions] = useState({
        addContact: item => {
            setStore(() => store.contacts.concat(item));
        },
        deleteContact: item => {
            setStore({})
        },
    });

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    );
};