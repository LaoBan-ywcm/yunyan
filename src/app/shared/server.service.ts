import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {


  private servers: Server[] = [
    new Server(1,11,'中心1服务器1',2),
    new Server(1,12,'中心1服务器2',3),
    new Server(1,13,'中心1服务器3',5),
    new Server(2,21,'中心2服务器1',2),
    new Server(2,22,'中心2服务器2',1),
    new Server(3,31,'中心3服务器1',3),
    new Server(3,32,'中心3服务器2',5),
    new Server(3,33,'中心3服务器3',1),
    new Server(3,34,'中心3服务器4',2),
    new Server(3,35,'中心3服务器5',3),
    new Server(4,41,'中心4服务器1',5),
    new Server(4,42,'中心4服务器2',3),
    new Server(5,51,'中心5服务器1',2),
  ];

  //根据center的ID来获取服务器列表
  getServers(cId: number){
    return this.servers.filter((server) => server.centerId == cId);
  }

  //根据服务器的id来获取服务器
  getServer(sId: number): Server{
    return this.servers.find((server) => server.id == sId);
  }


  constructor() { }

}

export class Server{
  constructor(
    public centerId: number,
    public id: number,
    public name: string,
    public vmN: number
  ){}

}
