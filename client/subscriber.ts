import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
console.log('Client 1 connected to websocket');

console.log('Client 1 subscribed to events from server...');
socket.on('event', () => {
  console.log('Client 1: hmm something just happened on the server!');
});
