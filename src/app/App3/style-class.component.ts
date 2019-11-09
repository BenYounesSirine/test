import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-class',
  templateUrl: './style-class.component.html',
  styleUrls: ['./style-class.component.css']
})
export class StyleClassComponent implements OnInit {
 couleur="red";
 taille=100;
 style="italic";

 getColor()
 {
   return "green";
 }
  constructor() { }

  ngOnInit() {
  }

}
