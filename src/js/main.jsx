import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/js/all.js';
import { AppContext } from "../context/ContactContext.jsx";

ReactDOM.createRoot(document.getElementById('app')).render(
    <AppContext>
        <Layout />
    </AppContext>
);
