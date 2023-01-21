import React, { createContext, useState } from 'react';

export const MainContext = createContext(null);

function ContextProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [state, setState] = useState({
        name: "",
        job: undefined,
        comment: ""
    });

    const values = {
        users,
        setUsers,
        state,
        setState
    }
    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvider