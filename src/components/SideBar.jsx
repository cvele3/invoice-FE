import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    }

    return (
        <div className="w-1/3 h-screen bg-gray-200 p-4 flex flex-col justify-between">
            <div>
                <button onClick={() => navigate('/invoices')} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-4 w-full">
                    Invoices
                </button>
                <button onClick={() => navigate('/items')} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
                    Items
                </button>
            </div>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full" onClick={logout}>
                Log out
            </button>
        </div>
    );
};

export default SideBar;