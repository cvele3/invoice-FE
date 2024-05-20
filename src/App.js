import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Registration from './components/Registration';
import Login from './components/Login';
import ShowInvoices from './pages/ShowInvoices';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-200 text-center">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/invoices" element={<ShowInvoices />} />
          </Routes>
          <ToastContainer />
        </main>
      </div>
    </Router>
  );
}

export default App;