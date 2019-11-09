import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
titre ="Opérations sur un tableau";
tab= [15, 46, 0, 89, 80];
  constructor() { }

  ngOnInit() {
  }

}
