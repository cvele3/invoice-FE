import React, { useState, useEffect } from 'react';
import CreateInvoice from './CreateInvoice';
import { getAllInvoicesByUser, getInvoiceById } from '../api';
import { utils, writeFile } from 'xlsx';

const Invoices = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [invoices, setInvoices] = useState([]);

    const startCreating = () => {
        setIsCreating(true);
    }

    const stopCreating = () => {
        setIsCreating(false);
    }

    const downloadInvoice = async (invoiceId) => {
        try {
            const invoice = await getInvoiceById(invoiceId);
            const newInvoice = {
                id: invoice.id,
                invoiceDate: invoice.invoiceDate,
                invoiceNumber: invoice.invoiceNumber,
                invoiceAmount: invoice.invoiceAmount,
                customerUsername: invoice.customerUsername,
                paymentType: invoice.paymentType.type
            };
            const ws = utils.json_to_sheet([newInvoice]);
            const wb = utils.book_new();
            utils.book_append_sheet(wb, ws, "Invoice");
            writeFile(wb, `invoice_${invoiceId}.xlsx`);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchInvoices = async () => {
            const username = localStorage.getItem('username');
            if (username) {
                try {
                    const response = await getAllInvoicesByUser(username);
                    const invoices = response.map(invoice => ({
                        id: invoice.id,
                        totalPrice: invoice.invoiceAmount,
                        owner: invoice.customerUsername
                    }));
                    setInvoices(invoices);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchInvoices();
    }, []);


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
                                <button onClick={() => downloadInvoice(invoice.id)} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
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