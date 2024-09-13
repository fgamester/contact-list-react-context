import React from "react";
import profilePicture from '../images/profile-picture.jpg'


const ContactContent = ({ contact }) => {

    return (
        <div>
            <div className="card rounded-5" >
                <img src={profilePicture} className="card-img-top rounded-top-5" alt="Contact Image" />
                <div className="card-body">
                    <p className="card-text m-0"><strong>Name: </strong>{contact.name}</p>
                    <p className="card-text m-0"><strong>Address: </strong>{contact.address}</p>
                    <p className="card-text m-0"><strong>Email: </strong>{contact.email}</p>
                    <p className="card-text m-0"><strong>Phone: </strong>{contact.phone}</p>
                </div>
            </div>
        </div>
    )
}
export default ContactContent;