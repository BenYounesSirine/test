import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4coloriage',
  templateUrl: './ex4coloriage.component.html',
  styleUrls: ['./ex4coloriage.component.css']
})
export class Ex4coloriageComponent implements OnInit {

  couleur="";
  familly="";
  police=["Arial","Calibri","Times New Roman"];
  pol="Arial";
  col="red";
  theme="ete";
  

  fnct(){
    this.couleur=this.col;
    this.familly=this.pol;
  }


  constructor() { }

  ngOnInit() {
  }

}
