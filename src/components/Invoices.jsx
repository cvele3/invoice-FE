import React from 'react';

const Invoices = () => {
    return (
        <div className="w-2/3 h-screen bg-white p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold mr-4">Invoices</h1>
                    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Download All
                    </button>
                    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        Create New
                    </button>
                </div>
                <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
            </div>
            <table className="table-auto w-full border-collapse border-2 border-gray-500">
                <thead>
                    <tr>
                        <th className="border-2 border-gray-500 px-4 py-2">Invoice_id</th>
                        <th className="border-2 border-gray-500 px-4 py-2">Total Price</th>
                        <th className="border-2 border-gray-500 px-4 py-2">Invoice Owner</th>
                        <th className="border-2 border-gray-500 px-4 py-2">Download Invoice</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Invoice rows go here */}
                </tbody>
            </table>
        </div>
    );
};

export default Invoices;