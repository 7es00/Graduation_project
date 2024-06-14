import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        userId: parseInt(localStorage.getItem('userId')), // Parse userId as a number
        isLoggedIn: localStorage.getItem('loggedin') === 'true',
        token: localStorage.getItem('token')
    });

    const loginUser = (userId, token) => {
        localStorage.setItem('userId', userId.toString()); // Convert userId to string before saving
        localStorage.setItem('token', token);
        localStorage.setItem('loggedin', 'true');
        setUser({
            userId: parseInt(userId), // Parse userId as a number
            token,
            isLoggedIn: true
        });
    };

    const logoutUser = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        localStorage.removeItem('loggedin');
        setUser({
            userId: null,
            token: null,
            isLoggedIn: false
        });
    };

    // Effect to update state when local storage changes
    useEffect(() => {
        const handleStorageChange = () => {
            setUser({
                userId: parseInt(localStorage.getItem('userId')), // Parse userId as a number
                isLoggedIn: localStorage.getItem('loggedin') === 'true',
                token: localStorage.getItem('token')
            });
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
