import React, { useRef, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from "../context/ContactContext.jsx";

const EditContact = () => {
    const context = useContext(Context);
    const [contact, setContact] = useState({});
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const adressRef = useRef();
    const pathParams = useParams();
    const navigate = useNavigate()

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedItem = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            address: adressRef.current.value,
        };
        context.actions.updateContact(updatedItem, contact.id);
        navigate('/');
    };

    const editBody = Object.keys(contact).length > 0 ? (
        <form className="text-start" onSubmit={e => handleSubmit(e)}>
            <h1 className="text-center">Update {contact.name} contact</h1>
            <div className="mb-3">
                <label htmlFor="fullNameInput" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullNameInput" name="fullNameInput"
                    aria-describedby="emailHelp" placeholder="Full Name" ref={nameRef} defaultValue={contact.name} />
            </div>
            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input type="email" className="form-control" id="emailInput" name="emailInput"
                    placeholder="Enter email" ref={emailRef} defaultValue={contact.email} />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="phoneNumberInput">Phone</label>
                <input type="text" className="form-control" id="phoneNumberInput" name="phoneNumberInput"
                    placeholder="Enter phone" ref={phoneRef} defaultValue={contact.phone} />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="adressInput">Adress</label>
                <input type="text" className="form-control" id="adressInput" name="adressInput"
                    placeholder="Enter adress" ref={adressRef} defaultValue={contact.address} />
            </div>
            <button type="submit" className="btn btn-primary col-12">Save changes</button>
        </form>
    ) : (
        <h1 >Oops! It seems like you didn't select nothing to edit here.</h1>
    )

    return (
        <div className="container-fluid d-flex justify-content-center mt-3">
            <div className="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6 col-xxl-5 text-center">
                {editBody}
                <Link to='/' className="link-secondary">get back to contacts</Link>
            </div>
        </div>
    );
}
export default EditContact;