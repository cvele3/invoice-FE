import axios from 'axios';

const API_URL = 'http://localhost:6464';

export const register = async (username, password, fullName) => {
    console.log("Do tud sam dosao");
    try {
        const response = await axios.post(`${API_URL}/authentication/registration`, {
            username,
            password,
            fullName
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.data);
        }
    } catch (error) {
        throw error;
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/authentication/login`, {
            username,
            password
        });

        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            return {
                message: response.data.message,
                username: response.data.username,
                token: response.data.token
            };
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getAllInvoicesByUser = async (username) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/invoice/getAllInvoicesByUsername/${username}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        throw error;
    }
};

export const getInvoiceById = async (invoiceId) => {
    try {
        const response = await axios.get(`${API_URL}/invoice/getInvoiceById/${invoiceId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.data);
        }
    } catch (error) {
        throw error;
    }
};