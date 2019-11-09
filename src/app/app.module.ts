import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableauComponent } from './App1-2/tableau.component';
import { ProfileComponent } from './ex1/profile.component';
import{FormsModule} from '@angular/forms';
import { StyleClassComponent } from './App3/style-class.component';
import { Ex2OrientationComponent } from './ex2-orientation/ex2-orientation.component';
import { Ex3saisonComponent } from './ex3saison/ex3saison.component';
import { Ex4coloriageComponent } from './ex4coloriage/ex4coloriage.component';
import { App4Component } from './app4/app4.component';
import { NomPersoPipe } from './nom-perso.pipe';
import { Ex5etudiantsComponent } from './ex5etudiants/ex5etudiants.component';
import { Tp4ex1parentsEnfantsComponent } from './parent/tp4ex1parents-enfants.component';
import { EnfantComponent } from './enfant/enfant.component';
import { TabComponent } from './tp4/ex1/tab/tab.component';
import { NombreComponent } from './tp4/ex1/nombre/nombre.component';
import { MaterielComponent } from './tp4/ex2/materiel/materiel.component';
import { MaterielListComponent } from './tp4/ex2/materiel-list/materiel-list.component';
import { NotesComponent } from './ex3/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    ProfileComponent,
    StyleClassComponent,
    Ex2OrientationComponent,
    Ex3saisonComponent,
    Ex4coloriageComponent,
    App4Component,
    NomPersoPipe,
    Ex5etudiantsComponent,
    Tp4ex1parentsEnfantsComponent,
    EnfantComponent,
    TabComponent,
    NombreComponent,
    MaterielComponent,
    MaterielListComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
