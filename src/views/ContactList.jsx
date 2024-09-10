import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";
import { Context } from "../context/ContactContext";

const ContactList = () => {
    /* const [contacts, setContacts] = useState([
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
    */
    const context = useContext(Context);

    return (
        <div className="d-flex justify-content-center mt-2">
            <div className="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <div className="d-flex justify-content-end">
                    <Link to='/newcontact' className="btn btn-success">Add new contact</Link>
                </div>
                <ul className="list-group  mt-3">
                    {context.store.contacts.map((item, index) => (
                        <ListItem contact={item} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ContactList;