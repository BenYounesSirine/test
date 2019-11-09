import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.css']
})



export class App4Component implements OnInit {

  employe= {nom:'Mrad', prenom:'Ali', date:new Date(1998,4,12), salaire: 687.56};


  constructor() { }

  ngOnInit() {
  }

}
