import React, { useContext, useState } from "react";
import usePostActions from "../../../Hooks/usePostActions";
import { AuthContext } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { message, createAccount } = usePostActions();
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    React.useEffect(() => {
        if(user) {
          navigate('/')
        }
    }, [user, navigate])

    const handleAccount = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await createAccount(email,  password, name);
            setTimeout(() => {
                navigate('/')
            }, 2000)
        } catch (error) {
          console.error('Error creating account:', error);
        }
    };

    return (
        <div className="container">
            <form className="auth_form" onSubmit={handleAccount}>
                {message && <p>{message}</p>}
                <div className="auth-form_input">
                    <h1>Email:</h1>
                    <input
                        className="auth_input" 
                        placeholder="Enter the Email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="auth-form_input">
                    <h1>Password:</h1>
                    <input 
                        className="auth_input" 
                        placeholder="Enter the Password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="auth-form_input">
                    <h1>Name:</h1>
                    <input 
                        className="auth_input" 
                        placeholder="Enter the Name" 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit" className="auth_button">Join</button>
            </form>
        </div>
    )
}