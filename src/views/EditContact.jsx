import React, { useRef, useContext, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../context/ContactContext.jsx";

const EditContact = () => {
    const context = useContext(Context);
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const adressRef = useRef();
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedItem = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            address: adressRef.current.value,
        };
        context.actions.updateContact(updatedItem, context.edit.id);
        navigate('/');
    };

    return (
        <div className="container-fluid d-flex justify-content-center mt-3">
            <form className="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6 col-xxl-5" onSubmit={e => handleSubmit(e)}>
                <h1 className="text-center">Add a new contact</h1>
                <div className="mb-3">
                    <label htmlFor="fullNameInput" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullNameInput" name="fullNameInput"
                        aria-describedby="emailHelp" placeholder="Full Name" ref={nameRef} defaultValue={context.edit.name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailInput" name="emailInput"
                        placeholder="Enter email" ref={emailRef} defaultValue={context.edit.email} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="phoneNumberInput">Phone</label>
                    <input type="text" className="form-control" id="phoneNumberInput" name="phoneNumberInput"
                        placeholder="Enter phone" ref={phoneRef} defaultValue={context.edit.phone} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="adressInput">Adress</label>
                    <input type="text" className="form-control" id="adressInput" name="adressInput"
                        placeholder="Enter adress" ref={adressRef} defaultValue={context.edit.address} />
                </div>
                <button type="submit" className="btn btn-primary col-12">Save changes</button>
                <Link to='/'>get back to contacts</Link>
            </form>
        </div>
    );
}
export default EditContact;