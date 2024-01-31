import io from "socket.io-client";

const socket = io(process.env.REACT_APP_BACKEND_CHAT_URL as string);

export default socket;
