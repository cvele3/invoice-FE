import React from 'react';
import SideBar from '../components/SideBar.jsx';
import Items from '../components/Items.jsx';

const ShowInvoices = () => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <Items />
        </div>
    );
};

export default ShowInvoices;