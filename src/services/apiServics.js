import axios from 'axios';

const BASE_URL = 'https://localhost:7144';

const AdminService = {
    login: async (data) => {
        try{
          const response = await axios.post(`${BASE_URL}/api/Admin/login`, data);
          return response.data;
        }
        catch (error){
          throw error.response.data;
        }
    },
    getNewFarmers: async () => {
        try{
            const response = await axios.get(`${BASE_URL}/api/Admin/NewFarmers`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },
    getApprovedFarmers: async () => {
        try{
            const response = await axios.get(`${BASE_URL}/api/Admin/ApprovedFarmers`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },
    getNewCouriers: async () => {
        try{
          const response = await axios.get(`${BASE_URL}/api/Admin/NewCouriers`);
          return response.data;
        }
        catch (error) {
          throw error.response.data;
        }
      },
    getApprovedCouriers: async () => {
        try{
            const response = await axios.get(`${BASE_URL}/api/Admin/ApprovedCouriers`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
      },
    approveFarmer: async (email) => {
        try {
            const response = await axios.put(`${BASE_URL}/api/Admin/approveFarmer?email=${email}`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },
    rejectFarmer: async (data) => {
        try {
          const response = await axios.post(`${BASE_URL}/api/Admin/denyFarmer`, data);
          return response.data;
        }
        catch (error) {
          throw error.response.data;
        }
    },
    approveCourier: async (email) => {
        try{
            const response = await axios.put(`${BASE_URL}/api/Admin/approveCourier?email=${email}`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },
    rejectCourier: async (data) => {
        try{
            const response = await axios.post(`${BASE_URL}/api/Admin/denyCourier`, data);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    }
};
export default AdminService;