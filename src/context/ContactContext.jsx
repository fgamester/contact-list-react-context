import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export const AppContext = ({ children }) => {

    const [store, setStore] = useState({});

    const getStore = () => {
        fetch('https://playground.4geeks.com/contact/agendas/fgamester/contacts')
            .then((resp) => {
                return resp.json();
            })
            .then((newResp) => {
                setStore(() => newResp.contacts)
                console.log(store)
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getStore();
    }, [])

    const [actions, setActions] = useState({
        addContact: item => {
            fetch('https://playground.4geeks.com/contact/agendas/fgamester/contacts', {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(resp => {
                    getStore();
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteContact: id => {
            fetch('https://playground.4geeks.com/contact/agendas/fgamester/contacts/' + id, {
                method: 'DELETE'
            })
                .then(() => {
                    getStore();
                })
                .catch(error => {
                    console.log(error)
                })
        },
    });

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    );
};