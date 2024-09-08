import React, { useState } from "react";



const ContactList = () => {
    const [contacts, setContacts] = useState([
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
        <div>
            <ul className="list-group">
                {contacts.map((item, index) => (
                    <li key={index} className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="m-0 fs-4">{item.name}</p>
                            <div>
                                <i className="fa-solid fa-pencil mx-1 fs-5"></i>
                                <i className="fa-solid fa-trash-can mx-1 fs-5"></i>
                            </div>
                        </div>
                        <p className="m-0 text-secondary fs-5"><i className="fa-solid fa-location-dot"></i> {item.address}</p>
                        <p className="m-0 text-secondary fs-5"><i className="fa-solid fa-phone-flip"></i> {item.phone}</p>
                        <p className="m-0 text-secondary"><i className="fa-solid fa-envelope"></i> {item.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;