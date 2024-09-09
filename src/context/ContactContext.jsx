import React, { createContext, useState } from "react";

export const Context = createContext(null);

const ContactContext = ({ children }) => {

    const [contactList, setContactList] = useState([
        {
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
        }
    ]);

    return (
        <Context.Provider value={{ contactList }}>
            {children}
        </Context.Provider>
    );
};

export default ContactContext;