import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContactContext.jsx";
import { Link, useParams } from "react-router-dom";
import ContactContent from "./CardContent.jsx";
import profilePicture from '../images/profile-picture.jpg'


const ContactCard = () => {
    const context = useContext(Context);
    const [contact, setContact] = useState({});
    const pathParams = useParams();

    const getContact = () => {
        if (Array.isArray(context.store) && context.store.length > 0) {
            for (let item of context.store) {
                if (item.id == pathParams.contact_id) {
                    setContact(item);
                    break;
                }
            }
        }
    }

    useEffect(() => {
        getContact();
    }, []);

    return (
        <div className="container-fluid d-flex justify-content-center mt-3">
            <div className="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <div>
                    {
                        Object.keys(contact).length > 0 ? (
                            <ContactContent contact={contact} />
                        ) : (
                            <div >
                                <h1 className="text-center">Oops! The info that are you looking for is not found.</h1>
                            </div>
                        )}
                    <Link to='/' className="link-secondary">or get back to contacts</Link>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;