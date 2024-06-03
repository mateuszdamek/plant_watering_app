import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <AppContext.Provider value={{ data, setData, loading, setLoading }}>
            {children}
        </AppContext.Provider>
    );
};
