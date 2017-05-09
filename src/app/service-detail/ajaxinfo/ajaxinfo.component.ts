import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ajaxinfo',
  templateUrl: './ajaxinfo.component.html',
  styleUrls: ['./ajaxinfo.component.css']
})
export class AjaxinfoComponent implements OnInit {

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
