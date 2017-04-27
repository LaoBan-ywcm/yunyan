import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {

  private servers: Server[] = [
    new Server(1,11,'中心1服务器1'),
    new Server(1,12,'中心1服务器2'),
    new Server(1,13,'中心1服务器3'),
    new Server(2,21,'中心2服务器1'),
    new Server(2,22,'中心2服务器2'),
    new Server(3,31,'中心3服务器1'),
    new Server(3,32,'中心3服务器2'),
    new Server(3,33,'中心3服务器3'),
    new Server(3,34,'中心3服务器4'),
    new Server(3,35,'中心3服务器5'),
    new Server(4,41,'中心4服务器1'),
    new Server(4,42,'中心4服务器2'),
    new Server(5,51,'中心5服务器1'),
  ];

  getServer(cId: number){
    return this.servers.filter((server) => server.centerId == cId);
  }

  constructor() { }

}

export class Server{
  constructor(
    public centerId: number,
    public id: number,
    public name: string
  ){}

}
