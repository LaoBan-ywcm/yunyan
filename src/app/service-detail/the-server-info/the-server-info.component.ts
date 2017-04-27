import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CenterService, Center} from "../../shared/center.service";
import {ServerService, Server} from "../../shared/server.service";


@Component({
  selector: 'app-the-server-info',
  templateUrl: './the-server-info.component.html',
  styleUrls: ['./the-server-info.component.css'],
  providers:[CenterService,ServerService]
})
export class TheServerInfoComponent implements OnInit {

  center: Center;
  servers: Server[];

  constructor(
    private _activatedroute:ActivatedRoute,
    private _centerservice: CenterService,
    private _serverservice: ServerService
  ) { }

  ngOnInit() {
    //获取中心传过来的id
    let centerId = this._activatedroute.snapshot.params['id'];
    this.center = this._centerservice.getCenter(centerId);
    //*ngFor中必须得用数组
    //根据中心传过来的id获取相对应的server
    this.servers = this._serverservice.getServer(centerId);
    
  }

}
