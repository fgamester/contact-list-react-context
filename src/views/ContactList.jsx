import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/ContactList.css';



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
        <div className="d-flex justify-content-center mt-2">
            <div className="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <div className="d-flex justify-content-end">
                    <Link to='/newcontact' className="btn btn-success">Add new contact</Link>
                </div>
                <ul className="list-group  mt-3">
                    {contacts.map((item, index) => (
                        <li key={index} className="list-group-item">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="m-0 fs-4">{item.name}</p>
                                <div className="d-flex">
                                    <button className="btn btn-light">
                                        <i className="fa-solid fa-pencil mx-1 fs-5" />
                                    </button>
                                    <button className="btn btn-light">
                                        <i className="fa-solid fa-trash-can mx-1 fs-5" />
                                    </button>
                                </div>
                            </div>
                            <p className="m-0 text-secondary fs-5"><i className="fa-solid fa-location-dot fs-5 me-2"></i> {item.address}</p>
                            <p className="m-0 text-secondary fs-6"><i className="fa-solid fa-phone-flip fs-6 me-2"></i> {item.phone}</p>
                            <p className="m-0 text-secondary fs-6"><i className="fa-solid fa-envelope fs-6 me-2"></i> {item.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ContactList;