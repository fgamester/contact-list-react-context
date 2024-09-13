import React, { useContext } from "react";
import { Context } from "../context/ContactContext.jsx";
import '../styles/ListItem.css';
import { Link } from "react-router-dom";
import profilePicture from '../images/profile-picture.jpg'


const ListItem = ({ contact }) => {
    const context = useContext(Context);

    return (
        <li className="list-group-item d-flex align-items-center">
            <img src={profilePicture} alt="" className="profile-pict img-fluid rounded-circle" />
            <div className="ms-3 flex-fill">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/contact/${contact.id}`} className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover m-0 fs-4">{contact.name}</Link>
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
            </div>
        </li>
    );
}

export default ListItem;