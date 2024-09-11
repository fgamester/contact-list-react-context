import React, { useContext } from "react";
import { Context } from "../context/ContactContext.jsx";

const ContactCard = () => {
    const context = useContext(Context);

    const cardContent = Object.keys(context.itemDisplayed).length > 0 ? (
        <div className="card col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6 col-xxl-5" >
            <img src="..." className="card-img-top" alt="Contact Image" />
            <div className="card-body">
                <p className="card-text m-0"><strong>Name: </strong>{context.itemDisplayed.name}</p>
                <p className="card-text m-0"><strong>Address: </strong>{context.itemDisplayed.addres}</p>
                <p className="card-text m-0"><strong>Email: </strong>{context.itemDisplayed.email}</p>
                <p className="card-text m-0"><strong>Phone: </strong>{context.itemDisplayed.phone}</p>
            </div>
        </div>
    ) : (
        <div className="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <h1 className="text-center">Oops! It seems like you didn't select nothing to show here.</h1>
        </div>
    )

    return (
        <div className="d-flex justify-content-center mt-3">
            {cardContent}
        </div>
    );
};

export default ContactCard;