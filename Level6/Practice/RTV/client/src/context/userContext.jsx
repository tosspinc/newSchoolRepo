import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Create a context for user
export const userContext = createContext();

// Create an instance of axios
const userAxios = axios.create({
    baseURL: '/auth/User' // Adjusted to match your server route
});

userAxios.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(sessionStorage.getItem('token') || '');
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            userAxios.get('/')
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user:', error);
                });
        }
    }, [token]);

    const login = async (credentials) => {
        try {
            const response = await userAxios.post('/login', credentials);
            const { token, user } = response.data;
            sessionStorage.setItem('token', token);
            setToken(token);
            setUser(user);
            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        setToken('');
        setUser(null);
        navigate('/login');
    };

    return (
        <userContext.Provider value={{ user, login, logout }}>
            {children}
        </userContext.Provider>
    );
};

