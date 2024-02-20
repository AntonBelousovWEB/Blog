import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
}

interface AuthContextType {
    user: User | null;
    login: (userData: string) => void;
    logout: () => void;
}

const initialState: AuthState = {
    user: null
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: (userData: string) => {},
    logout: () => {}
});

type Action = { type: 'LOGIN', payload: User } | { type: 'LOGOUT' };

function authReducer(state: AuthState, action: Action): AuthState {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}

async function fetchUserData(token: string, dispatch: React.Dispatch<Action>) {
    try {
        const response = await axios.get<User>('http://localhost:5000/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch({ type: 'LOGIN', payload: response.data });
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserData(token, dispatch);
        }
    }, []);

    const login = (userData: string) => {
        localStorage.setItem('token', userData);
        fetchUserData(userData, dispatch);
    };

    const logout = () => {
        localStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ user: state.user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };