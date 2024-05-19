import React from 'react';
import SideBar from '../components/SideBar.jsx';
import Invoices from '../components/Invoices.jsx';

const ShowInvoices = () => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <Invoices />
        </div>
    );
};

export default ShowInvoices;