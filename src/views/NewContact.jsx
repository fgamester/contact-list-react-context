import React from "react";
import { Link } from 'react-router-dom'

const NewContact = () => {
    return (
        <div className="container-fluid d-flex justify-content-center mt-3">
            <form className="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <h1 className="text-center">Add a new contact</h1>
                <div className="mb-3">
                    <label htmlFor="fullNameInput" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullNameInput" aria-describedby="emailHelp" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="phoneNumberInput">Phone</label>
                    <input type="text" className="form-control" id="phoneNumberInput" placeholder="Enter phone" />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="adressInput">Adress</label>
                    <input type="text" className="form-control" id="adressInput" placeholder="Enter adress" />
                </div>
                <button type="submit" className="btn btn-primary col-12">save</button>
                <Link to='/'>or get back to contacts</Link>
            </form>
        </div>
    );
}

export default NewContact;