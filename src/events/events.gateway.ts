import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer() server: Server;

  // Hooks into the connection event
  handleConnection(client: any, ...args: any[]) {
    const { sockets } = this.server.sockets;

    console.log(`Client id: ${client.id} connected`);
    console.log(`Number of connected clients: ${sockets.size}`);
  }

  // Hooks into the disconnection event
  handleDisconnect(client: any) {
    console.log(`Cliend id:${client.id} disconnected`);
  }

  @SubscribeMessage('event')
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ): string {
    console.log('Handling published event to Socket server');

    // broadcast an event to all connections except the publishing socket
    client.broadcast.emit('event');

    return data;
  }
}
