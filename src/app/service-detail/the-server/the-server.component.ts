import { Component, OnInit } from '@angular/core';
import {ServerService, Server} from "../../shared/server.service";

@Component({
  selector: 'app-the-server',
  templateUrl: './the-server.component.html',
  styleUrls: ['./the-server.component.css'],
  providers:[ServerService]
})
export class TheServerComponent implements OnInit {

  //当前服务器
  server: Server;

  constructor(
    private _serverservice:ServerService
  ) { }

  ngOnInit() {
    this.server = this._serverservice.toServerInfo();
    console.log(this.server);
  }

}
