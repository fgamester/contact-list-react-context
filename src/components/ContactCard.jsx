import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContactContext.jsx";
import { Link, useParams } from "react-router-dom";

const ContactCard = () => {
    const context = useContext(Context);
    const [contact, setContact] = useState({});
    const pathParams = useParams();

    useEffect(() => {
        if (context.store.length > 0) {
            for (let item of context.store) {
                if (item.id == pathParams.contact_id) {
                    setContact(() => item);
                    break;
                }
            }
        }
    }, []);

    const cardContent = Object.keys(contact).length > 0 ? (
        <div>
            <div className="card" >
                <img src="..." className="card-img-top" alt="Contact Image" />
                <div className="card-body">
                    <p className="card-text m-0"><strong>Name: </strong>{contact.name}</p>
                    <p className="card-text m-0"><strong>Address: </strong>{contact.address}</p>
                    <p className="card-text m-0"><strong>Email: </strong>{contact.email}</p>
                    <p className="card-text m-0"><strong>Phone: </strong>{contact.phone}</p>
                </div>
            </div>
        </div>
    ) : (
        <div >
            <h1 className="text-center">Oops! It seems like you didn't select nothing to show here.</h1>
        </div>
    )

    return (
        <div className="container-fluid d-flex justify-content-center mt-3">
            <div className="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <div>
                    {cardContent}
                    <Link to='/'>or get back to contacts</Link>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;