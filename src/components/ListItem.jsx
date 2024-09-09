import React from "react";
import '../styles/ListItem.css';

const ListItem = ({ contact }) => {
    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                <p className="m-0 fs-4">{contact.name}</p>
                <div className="d-flex">
                    <button className="btn btn-light">
                        <i className="fa-solid fa-pencil mx-1 fs-5" />
                    </button>
                    <button className="btn btn-light">
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
    );
}

export default ListItem;