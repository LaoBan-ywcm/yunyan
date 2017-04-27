import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CenterService, Center} from "../../shared/center.service";

@Component({
  selector: 'app-the-server-info',
  templateUrl: './the-server-info.component.html',
  styleUrls: ['./the-server-info.component.css'],
  providers:[CenterService]
})
export class TheServerInfoComponent implements OnInit {

  center: Center;
  serverNum: number[];

  constructor(
    private _activatedroute:ActivatedRoute,
    private _centerservice: CenterService
  ) { }

  ngOnInit() {
    let centerId = this._activatedroute.snapshot.params['id'];
    this.center = this._centerservice.getCenter(centerId);
    //*ngFor中必须得用数组
    this.serverNum = Array(this.center.vm);
  }

}
