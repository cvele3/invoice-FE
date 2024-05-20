import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import { toast } from "react-toastify";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(username, password);
            console.log(response.token);
            navigate('/invoices');
        } catch (error) {
            toast.error('Check your credentials, or create account', { autoClose: 2000 });
        }
    }

    const goToRegistration = () => {
        navigate('/register');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <button onClick={goToRegistration} className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800 mb-5">
                            Not a user? Register now!
                        </button>
                        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submitLogin}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;