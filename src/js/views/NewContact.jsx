import React from "react";
import { Link } from 'react-router-dom'

const NewContact = () => {
    return (
        <div>
            <form>
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
                    <input type="text" className="form-control" id="phoneNumberInput" placeholder="Enter phone"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="adressInput">Adress</label>
                    <input type="text" className="form-control" id="adressInput" placeholder="Enter adress"/>
                </div>
                <button type="submit" className="btn btn-primary col-12">save</button>
                <a href="#">or get back to contacts</a>
            </form>
        </div>
    );
}

export default NewContact;