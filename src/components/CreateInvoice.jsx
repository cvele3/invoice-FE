import React, { useState } from 'react';

const CreateInvoice = ({ onClose }) => {
    const [items, setItems] = useState([{ item: '', quantity: 1 }]);
    const [paymentType, setPaymentType] = useState('');

    const addItem = () => {
        setItems([...items, { item: '', quantity: 1 }]);
    };

    const removeItem = (indexToRemove) => {
        setItems(items.filter((_, index) => index !== indexToRemove));
    };

    const createInvoice = () => {
        // Logic to create invoice goes here
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Create Invoice</h2>
                {items.map((item, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <select className="border rounded mr-2 w-2/4" value={item.item} onChange={e => {
                            const newItems = [...items];
                            newItems[index].item = e.target.value;
                            setItems(newItems);
                        }}>
                            {/* Options for items go here */}
                        </select>
                        <input className="border rounded w-1/4" type="number" min="1" value={item.quantity} onChange={e => {
                            const newItems = [...items];
                            newItems[index].quantity = e.target.value;
                            setItems(newItems);
                        }} />
                        <button onClick={() => removeItem(index)} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-0.5 rounded w-1/4 mx-2">
                            -
                        </button>
                    </div>
                ))}
                <button onClick={addItem} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-4">
                    +
                </button>
                <select className="border rounded mb-4 w-full" value={paymentType} onChange={e => setPaymentType(e.target.value)}>
                    {/* Options for payment types go here */}
                </select>
                <button onClick={createInvoice} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
                    Create Invoice
                </button>
            </div>
        </div>
    );
};

export default CreateInvoice;