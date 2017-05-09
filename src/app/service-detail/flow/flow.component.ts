import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

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
