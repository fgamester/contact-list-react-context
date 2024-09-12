import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewContact from "../views/NewContact.jsx";
import ContactList from "../views/ContactList.jsx";
import EditContact from "../views/EditContact.jsx";
import ContactCard from "../components/ContactCard.jsx";

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={'Not Found 404'} />
                <Route path='/' element={<ContactList />} />
                <Route path='/newcontact' element={<NewContact />} />
                <Route path="/updatecontact/:contact_id" element={<EditContact />} />
                <Route path="/contact/:contact_id" element={<ContactCard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;