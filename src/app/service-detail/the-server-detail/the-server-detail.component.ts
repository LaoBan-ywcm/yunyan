import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServerService, Server} from "../../shared/server.service";

@Component({
  selector: 'app-the-server-detail',
  templateUrl: './the-server-detail.component.html',
  styleUrls: ['./the-server-detail.component.css']
})
export class TheServerDetailComponent implements OnInit {

  //当前服务器id
  serverId: number;

  //当前服务器数据
  server: Server;


  constructor(
    private _activateroute: ActivatedRoute,
    private _serverservice: ServerService
  ) { }

  ngOnInit() {
    //获取当前服务器id
    let sId = this._activateroute.snapshot.params['id'];
    this.serverId = sId;

    //根据当前服务器id获取该服务器的数据
    this.server = this._serverservice.getServer(this.serverId);

  }

}
