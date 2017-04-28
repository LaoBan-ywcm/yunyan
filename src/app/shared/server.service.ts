import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {

  //用户点击的服务器
  private server: Server;

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

  //根据center的ID来获取服务器列表
  getServer(cId: number){
    return this.servers.filter((server) => server.centerId == cId);
  }

  //获取用户点击的服务器
  getServerInfo(server: Server){
    this.server = server;
    console.log(this.server)

  }

  //向服务器的详细展示组件推送当前服务器
  toServerInfo(): Server{
    return this.server;
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
