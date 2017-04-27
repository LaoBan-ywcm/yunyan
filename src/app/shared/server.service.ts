import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {

  private servers: Server[] = [
    new Server(1,1,'中心1服务器1'),
    new Server(1,2,'中心1服务器2'),
    new Server(1,3,'中心1服务器3'),
    new Server(2,1,'中心2服务器1'),
    new Server(2,2,'中心2服务器2'),
    new Server(3,1,'中心3服务器1'),
    new Server(3,2,'中心3服务器2'),
    new Server(3,3,'中心3服务器3'),
    new Server(3,4,'中心3服务器4'),
    new Server(3,5,'中心3服务器5'),
    new Server(4,1,'中心4服务器1'),
    new Server(4,2,'中心4服务器2'),
    new Server(5,1,'中心5服务器1'),
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
