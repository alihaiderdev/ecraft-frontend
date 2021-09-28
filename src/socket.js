import io from 'socket.io-client';

const socket = io('http://localhost:8001', { secure: process.env.NODE_ENV === 'development' ? false : true, autoConnect: false }); // address of our realtime server

export default socket;
