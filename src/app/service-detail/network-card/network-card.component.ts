import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-network-card',
  templateUrl: './network-card.component.html',
  styleUrls: ['./network-card.component.css']
})
export class NetworkCardComponent implements OnInit {

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
