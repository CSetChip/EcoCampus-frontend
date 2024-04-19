import axios from 'axios';

let API_BASE_URL = "";

const StudentService = {
    route: (apiroute) => {
        API_BASE_URL = `http://localhost:8080/api/${apiroute}`;
    },
    get: async () => {
        const response = await axios.get(`${API_BASE_URL}/list`);
        return response.data;
    },
    getById: async (studentId) => {
        const response = await axios.get(`${API_BASE_URL}/${studentId}`);
        return response.data;
    },
    create: async (studentData) => {
        const response = await axios.post(`${API_BASE_URL}/save`, studentData);
        return response.data;
    },
    update: async (studentId, updatedData) => {
        const response = await axios.put(`${API_BASE_URL}/update/${studentId}`, updatedData);
        return response.data;
    },
    delete: async (studentId) => {
        const response = await axios.delete(`${API_BASE_URL}/delete/${studentId}`);
        return response.data;
    }
};

export default StudentService;
