import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  private centers: Center[] = [
    new Center(1, '中心1', 3),
    new Center(2, '中心2', 2),
    new Center(3, '中心3', 5),
    new Center(4, '中心4', 2),
    new Center(5, '中心5', 1),
    new Center(6,'中心6',5),
    new Center(7,'中心7',3)
  ];

  constructor() {
  }


  ngOnInit() {
  }

}

export class Center {
  constructor(public id: number,
              public name: string,
              public vm: number) {
  }
}




