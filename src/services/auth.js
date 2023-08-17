import axios from 'axios';

const API_URL = 'http://hoangan.edu.test/';  // Ví dụ: 'http://localhost:8000'

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, {
      email,
      password,
    });
    return response.data.token;
  } catch (error) {
    console.error("Error logging in:", error.response.data);
    throw error;
  }
};

