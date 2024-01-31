import api from "../api/axios";

export const createChat = async (data: any) => {
    try {
        const response = await api.post("/chat", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
