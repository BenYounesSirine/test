import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3saisonComponent } from './ex3saison.component';

describe('Ex3saisonComponent', () => {
  let component: Ex3saisonComponent;
  let fixture: ComponentFixture<Ex3saisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex3saisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3saisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
