import React, { useState, useEffect } from 'react';
import CreateInvoice from './CreateInvoice';
import { fetchInvoices, downloadInvoice, downloadAllInvoices } from '../utils/invoiceUtils';

const Invoices = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [invoices, setInvoices] = useState([]);
    const [search, setSearch] = useState('');

    const startCreating = () => {
        setIsCreating(true);
    }

    const stopCreating = () => {
        setIsCreating(false);
    }

    const addInvoice = (newInvoice) => {
        setInvoices([...invoices, newInvoice]);
    }

    useEffect(() => {
        const loadInvoices = async () => {
            const invoices = await fetchInvoices();
            setInvoices(invoices);
        };

        loadInvoices();
    }, []);

    const filteredInvoices = invoices.filter(invoice => {
        if (!search) return true;
        return String(invoice.id) === search;
    });

    return (
        <div className="w-2/3 h-screen bg-white p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold mr-4">Invoices</h1>
                    <button onClick={() => downloadAllInvoices(invoices)} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Download All
                    </button>
                    <button onClick={startCreating} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        Create New
                    </button>
                </div>
                <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
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
                    {filteredInvoices.map((invoice, index) => (
                        <tr key={index}>
                            <td className="border-2 border-gray-500 px-4 py-2">{invoice.id}</td>
                            <td className="border-2 border-gray-500 px-4 py-2">{invoice.invoiceAmount} €</td>
                            <td className="border-2 border-gray-500 px-4 py-2">{invoice.customerUsername}</td>
                            <td className="border-2 border-gray-500 px-4 py-2">
                                <button onClick={() => downloadInvoice(invoice.id)} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                    Download
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isCreating && <CreateInvoice onClose={stopCreating} onAdd={addInvoice} />}
        </div>
    );
};

export default Invoices;