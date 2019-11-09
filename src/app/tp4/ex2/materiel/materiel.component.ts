import { Component, OnInit, Input } from '@angular/core';
import { Materiel } from '../Materiel';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
/*@Input () nom:string;
@Input () ref:string;
@Input () img:string;
@Input () prix:number;
@Input () repare:string;*/

@Input('mate') materiel: Materiel;


  ngOnInit() {
  }

}
