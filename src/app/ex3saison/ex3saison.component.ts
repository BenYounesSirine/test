import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3saison',
  templateUrl: './ex3saison.component.html',
  styleUrls: ['./ex3saison.component.css']
})
export class Ex3saisonComponent implements OnInit {
  s="11";
  m=1;
  saison=["11","22","33","44"];
  

  constructor() { }

  ngOnInit() {
  }

}
