import React from "react";
import NewContact from "./views/NewContact.jsx";
import ContactList from "./views/ContactList.jsx";

const Layout = () => {
    return (
        <div className="m-2">
            <ContactList />
        </div>
    );
}

export default Layout;