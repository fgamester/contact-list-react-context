import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem.jsx";
import { Context } from "../context/ContactContext.jsx";

const ContactList = () => {
    const context = useContext(Context);

    return (
        <div className="container-fluid d-flex justify-content-center mt-2">
            <div className="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <div className="d-flex justify-content-end">
                    <Link to='/newcontact' className="btn btn-success">Add new contact</Link>
                </div>
                <ul className="list-group mt-3 rounded-4">
                    {(Array.isArray(context.store) && context.store.length > 0) ?
                        (
                            context.store.map((item, index) => (
                                <ListItem contact={item} key={index} />
                            ))
                        ) : (
                            <div>
                                <h1 className="text-center">It's seems like you don't have any contact added...</h1>
                                <p className="text-center">Sometimes the server is down. If you have troubles to add a contact, you can try later or contact support services.</p>
                            </div>
                        )}
                </ul>
            </div>
        </div>
    );
}

export default ContactList;