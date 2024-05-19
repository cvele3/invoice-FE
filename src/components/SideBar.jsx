import React from 'react';

const SideBar = () => {
    return (
        <div className="w-1/3 h-screen bg-gray-200 p-4 flex flex-col justify-between">
            <div>
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-4 w-full">
                    Invoices
                </button>
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
                    Items
                </button>
            </div>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
                User
            </button>
        </div>
    );
};

export default SideBar;