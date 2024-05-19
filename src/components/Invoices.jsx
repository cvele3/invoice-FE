import React, { useState } from 'react';
import CreateInvoice from './CreateInvoice';

const Invoices = () => {
    const [isCreating, setIsCreating] = useState(false);

    const startCreating = () => {
        setIsCreating(true);
    }

    const stopCreating = () => {
        setIsCreating(false);
    }

    const invoices = [
        { id: 1, totalPrice: 100, owner: 'John Smith', downloadLink: '#' },
        { id: 2, totalPrice: 200, owner: 'John Smith', downloadLink: '#' },
        { id: 3, totalPrice: 300, owner: 'John Smith', downloadLink: '#' },
        { id: 4, totalPrice: 400, owner: 'John Smith', downloadLink: '#' },
        { id: 5, totalPrice: 500, owner: 'John Smith', downloadLink: '#' },
        { id: 6, totalPrice: 600, owner: 'John Smith', downloadLink: '#' },
        { id: 7, totalPrice: 700, owner: 'John Smith', downloadLink: '#' },
        { id: 8, totalPrice: 800, owner: 'John Smith', downloadLink: '#' },
        { id: 9, totalPrice: 900, owner: 'John Smith', downloadLink: '#' },
        { id: 10, totalPrice: 1000, owner: 'John Smith', downloadLink: '#' },
        { id: 11, totalPrice: 1100, owner: 'John Smith', downloadLink: '#' },
        { id: 12, totalPrice: 1200, owner: 'John Smith', downloadLink: '#' },
        { id: 13, totalPrice: 1300, owner: 'John Smith', downloadLink: '#' }
        // Add more dummy data here
    ];


    return (
        <div className="w-2/3 h-screen bg-white p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold mr-4">Invoices</h1>
                    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Download All
                    </button>
                    <button onClick={startCreating} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        Create New
                    </button>
                </div>
                <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
            </div>
            <table className="table-auto w-full border-collapse border-2 border-gray-500">
                <thead>
                    <tr>
                        <th className="border-2 border-gray-500 px-4 py-2">Invoice_id</th>
                        <th className="border-2 border-gray-500 px-4 py-2">Total Price </th>
                        <th className="border-2 border-gray-500 px-4 py-2">Invoice Owner</th>
                        <th className="border-2 border-gray-500 px-4 py-2">Download Invoice</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => (
                        <tr key={index}>
                            <td className="border-2 border-gray-500 px-4 py-2">{invoice.id}</td>
                            <td className="border-2 border-gray-500 px-4 py-2">{invoice.totalPrice} €</td>
                            <td className="border-2 border-gray-500 px-4 py-2">{invoice.owner}</td>
                            <td className="border-2 border-gray-500 px-4 py-2">
                                <button onClick={() => window.location.href = invoice.downloadLink} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                    Download
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isCreating && <CreateInvoice onClose={stopCreating} />}
        </div>
    );
};

export default Invoices;