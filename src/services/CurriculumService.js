import axios from "axios";
import api from "./api";
import urls from "./urls";

const url = urls();
export const getAccessToken = async (email, password) => {
    try {
        const response = await axios.post(url.rootedu + '/api/login', {
            email,
            password,
        });
        console.log(url.curriculum.list);
        return response.data.token;

    } catch (error) {
        if (error.response && error.response.data) {
            console.error("Error getting token:", error.response.data);
        } else {
            console.error("Error getting token:", error.message);
        }
        throw error;
    }
}

export const getCurriculum = async (token) => {
    try {
        const response = await axios.get(url.curriculum.list, {
            headers: {         
                'Accept': 'application/json',       
                "Authorization": `Bearer ${token}`
            },
        });       
        return response.data.data;
    } catch (error) {
        if (error.response && error.response.data) {
            console.error("Error fetching curriculum:", error.response.data);
        } else {
            console.error("Error fetching curriculum:", error.message);
        }
        throw error;
        
    }
}

export const getCurriculumData = async () => {
    try {
        const token = await getAccessToken('triduc1204@gmail.com', 'Tivua1994');
        const data = await getCurriculum(token);
        return data;
    } catch (error) {
        console.error("Error in getCurriculumData:", error);
        throw error;
    }
};

