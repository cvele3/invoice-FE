import React from 'react';
import './index.css';
import Registration from './components/Registration';
import Login from './components/Login';
import ShowInvoices from './pages/ShowInvoices';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200 text-center">
      <main className="flex-grow">
        < ShowInvoices />
        {/* < Login /> */}
        {/* < Registration /> */}
      </main>
    </div>
  );
}

export default App;