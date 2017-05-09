import { Component, OnInit } from '@angular/core';
import {ServerService, Server} from "../../shared/server.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-the-server',
  templateUrl: './the-server.component.html',
  styleUrls: ['./the-server.component.css'],
  providers:[ServerService]
})
export class TheServerComponent implements OnInit {

  //当前服务器id
  serverId: number;

  constructor(
    private _activatedrouter:ActivatedRoute
  ) { }

  ngOnInit() {
    let sId = this._activatedrouter.snapshot.params['id'];
    this.serverId = sId;
  }

}
