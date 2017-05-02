import { Component, OnInit } from '@angular/core';
import {ServerService, Server} from "../../shared/server.service";

@Component({
  selector: 'app-the-server',
  templateUrl: './the-server.component.html',
  styleUrls: ['./the-server.component.css'],
  providers:[ServerService]
})
export class TheServerComponent implements OnInit {


  constructor(

  ) { }

  ngOnInit() {

  }

}
