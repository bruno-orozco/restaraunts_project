const API_URL = "http://127.0.0.1:8000/api/restaurants/";

export const listCompanies = async () => {
    return await fetch(API_URL);
};

export const getCompany = async (companyId) => {
    return await fetch(`${API_URL}${companyId}`);
};

export const registerCompany = async (newCompany) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "restaurant_name": String(newCompany.restaurant_name).trim(),
            "restaurant_type": parseInt(newCompany.restaurant_type),
            "address": String(newCompany.address).trim(),
            "phone_number": String(newCompany.phone_number).trim(),
        })
    });
};

export const updateCompany = async (companyId, updatedCompany) => {
    return await fetch(`${API_URL}${companyId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "restaurant_name": String(updatedCompany.restaurant_name).trim(),
            "restaurant_type": parseInt(updatedCompany.restaurant_type),
            "address": String(updatedCompany.address).trim(),
            "phone_number": String(updatedCompany.phone_number).trim(),
        })
    });
};

export const deleteCompany = async (companyId) => {
    return await fetch(`${API_URL}${companyId}`, {
        method: 'DELETE'
    });
};