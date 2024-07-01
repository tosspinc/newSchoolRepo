import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Create a context for user
export const userContext = createContext();

// Create an instance of axios
const userAxios = axios.create({
    baseURL: '/auth'
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
    const initState = { user: null, token: "", issues: [], errMsg: "" }
    const [userState, setUserState] = useState(initState);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            userAxios.get('/me') // Adjust this endpoint to fetch the current user
                .then(response => {
                    console.log("Fetched user data on init:", response.data);
                    setUserState(prevState => ({ ...prevState, user: response.data, token }));
                })
                .catch(error => {
                    console.error('Error fetching user:', error);
                });
        }
    }, []);

    const login = async (credentials) => {
        try {
            const response = await userAxios.post('/login', credentials);
            const { token, user } = response.data;
            console.log("Login response user data: ", user);
            sessionStorage.setItem('token', token);
            setUserState({ ...userState, user, token });
            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    };

    const signup = async (credentials) => {
        try {
            const response = await userAxios.post('/signup', credentials);
            const { token, user } = response.data;
            sessionStorage.setItem('token', token);
            setUserState({ ...userState, user, token });
            navigate('/');
        } catch (error) {
            console.error('Error signing up:', error);
            throw error;
        }
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        setUserState(initState);
        navigate('/');
    };

    return (
        <userContext.Provider value={{ userState, login, signup, logout }}>
            {children}
        </userContext.Provider>
    );
};
