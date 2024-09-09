import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewContact from "../views/NewContact.jsx";
import ContactList from "../views/ContactList.jsx";
import ContactContext from "../context/ContactContext.jsx";

const Layout = () => {
    return (
        <ContactContext>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={'Not Found 404'} />
                    <Route path='/' element={<ContactList />} />
                    <Route path='/newcontact' element={<NewContact />} />
                </Routes>
            </BrowserRouter>
        </ContactContext>
    );
}

export default Layout;