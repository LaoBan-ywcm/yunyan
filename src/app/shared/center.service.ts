import { Injectable } from '@angular/core';

@Injectable()
export class CenterService {

  private centers: Center[] = [
    new Center(1, '中心1', 3),
    new Center(2, '中心2', 2),
    new Center(3, '中心3', 5),
    new Center(4, '中心4', 2),
    new Center(5, '中心5', 1),
  ];

  getCenters(): Center[]{
    return this.centers;
  }

  getCenter(id: number): Center{
    return this.centers.find((center: Center) => center.id == id);
  }

  constructor() { }

}

export class Center {
  constructor(public id: number,
              public name: string,
              public vm: number) {
  }
}
