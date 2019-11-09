import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2-orientation',
  templateUrl: './ex2-orientation.component.html',
  styleUrls: ['./ex2-orientation.component.css']
})
export class Ex2OrientationComponent implements OnInit {

  etudiant={nom:'Ali', moyenne:10.85};
  specialite=["RSI","DSI","SEM"];
  s="RSI";


  constructor() { }

  ngOnInit() {
  }

}
