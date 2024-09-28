import axios from 'axios';

const API_URL = 'http://localhost:3001/auth';

export const signUp = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/sign-up`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/sign-in`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
