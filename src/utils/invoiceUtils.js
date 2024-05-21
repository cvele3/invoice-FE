import { getAllInvoicesByUser, getInvoiceById } from '../api';
import { utils, writeFile } from 'xlsx';

export const downloadInvoice = async (invoiceId) => {
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

export const fetchInvoices = async () => {
    const username = localStorage.getItem('username');
    if (username) {
        try {
            const response = await getAllInvoicesByUser(username);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}

export const downloadAllInvoices = async (invoices) => {
    try {
        const newInvoices = invoices.map(invoice => ({
            id: invoice.id,
            invoiceDate: invoice.invoiceDate,
            invoiceNumber: invoice.invoiceNumber,
            invoiceAmount: invoice.invoiceAmount,
            customerUsername: invoice.customerUsername,
            paymentType: invoice.paymentType.type
        }));
        const ws = utils.json_to_sheet(newInvoices);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Invoices");
        writeFile(wb, `invoices.xlsx`);
    } catch (error) {
        console.error(error);
    }
}