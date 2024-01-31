import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
console.log('Client 1 connected to websocket');

console.log('Client 1 subscribed to events from server...');
socket.on('event', ({ message }) => {
  console.log(`Client 1: message received: ${message}`);
});
