import io from 'socket.io-client';
//3001
require("dotenv").config();
const socket = io('https://coderace-ohjzsdclpa-uc.a.run.app');
// const socket = io(process.env.REACT_APP_SOCKET);

export default socket;
