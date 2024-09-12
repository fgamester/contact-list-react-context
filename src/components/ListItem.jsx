import React, { useContext } from "react";
import { Context } from "../context/ContactContext.jsx";
import '../styles/ListItem.css';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ListItem = ({ contact }) => {
    const context = useContext(Context);

    return (
        <div>
            <li className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/contact/${contact.id}`} className="m-0 fs-4">{contact.name}</Link>
                    <div className="d-flex">
                        <Link to={`updatecontact/${contact.id}`} className="btn btn-light">
                            <i className="fa-solid fa-pencil mx-1 fs-5" />
                        </Link>
                        <button type="button" className="btn btn-light" onClick={() => context.actions.deleteContact(contact.id)} >
                            <i className="fa-solid fa-trash-can mx-1 fs-5" />
                        </button>
                    </div>
                </div>
                <p className="m-0 text-secondary fs-5">
                    <i className="fa-solid fa-location-dot fs-5 me-2" />
                    {contact.address}
                </p>
                <p className="m-0 text-secondary fs-6">
                    <i className="fa-solid fa-phone-flip fs-6 me-2" />
                    {contact.phone}
                </p>
                <p className="m-0 text-secondary fs-6">
                    <i className="fa-solid fa-envelope fs-6 me-2" />
                    {contact.email}
                </p>
            </li>
        </div>
    );
}

export default ListItem;