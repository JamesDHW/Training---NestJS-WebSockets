import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
console.log('Client 2 connected to websocket');

console.log('Client 2 publishing event to server...');
socket.emit('event');

setTimeout(() => {
  console.log('Client 2 disconnecting');
  socket.disconnect();
}, 1500);
