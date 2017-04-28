import {Component, OnInit, OnChanges, DoCheck, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CenterService, Center} from "../../shared/center.service";
import {ServerService, Server} from "../../shared/server.service";


@Component({
  selector: 'app-the-server-info',
  templateUrl: './the-server-info.component.html',
  styleUrls: ['./the-server-info.component.css'],
  providers:[CenterService,ServerService]
})
export class TheServerInfoComponent implements OnInit ,OnChanges,DoCheck,OnDestroy{

  center: Center;
  servers: Server[];

  //用户当前点击的服务器
  server: Server;

  constructor(
    private _activatedroute:ActivatedRoute,
    private _centerservice: CenterService,
    private _serverservice: ServerService
  ) { }

  //获取用户当前点击的服务器
  setServer(server: Server){
    this.server = server;
    console.log(this.server)
  }

  getServer(): Server{
    console.log(this.server);
    return this.server;
  }


  ngOnInit() {
    //获取中心传过来的id
    let centerId = this._activatedroute.snapshot.params['id'];
    this.center = this._centerservice.getCenter(centerId);
    //*ngFor中必须得用数组
    //根据中心传过来的id获取相对应的server
    this.servers = this._serverservice.getServer(centerId);

  }

  ngOnChanges(){

    console.log('changes')
    //获取用户点击的服务器的id
    let server = this.getServer();
    this._serverservice.getServerInfo(server);
  }

  ngDoCheck(){
    console.log('check')
    //获取用户点击的服务器的id
    let server = this.getServer();
    this._serverservice.getServerInfo(server);
  }

  ngOnDestroy(){
    console.log('destruy');
    //获取用户点击的服务器的id
    let server = this.getServer();
    this._serverservice.getServerInfo(server);
  }

}
