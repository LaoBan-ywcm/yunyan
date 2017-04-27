import {Component, OnInit} from '@angular/core';
import {Center,CenterService} from "../../shared/center.service";


@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
  providers:[CenterService]
})
export class CenterComponent implements OnInit {

  public centers: Center[];

  constructor(
    public _centerservice: CenterService
  ) {
  }

  ngOnInit() {
    this.centers = this._centerservice.getCenters();
  }

}






