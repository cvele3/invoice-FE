import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../api';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const products = await getAllProducts();
                setItems(products);
            } catch (error) {
                console.error(error);
            }
        };

        fetchItems();
    }, []);

    return (
        <div className="w-2/3 h-screen bg-white p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold mr-4">Items</h1>
            </div>
            <table className="table-auto w-full border-collapse border-2 border-gray-500">
                <thead>
                    <tr>
                        <th className="border-2 border-gray-500 px-4 py-2">Item ID</th>
                        <th className="border-2 border-gray-500 px-4 py-2">Item Name</th>
                        <th className="border-2 border-gray-500 px-4 py-2">Item Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td className="border-2 border-gray-500 px-4 py-2">{item.id}</td>
                            <td className="border-2 border-gray-500 px-4 py-2">{item.name}</td>
                            <td className="border-2 border-gray-500 px-4 py-2">{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Items;