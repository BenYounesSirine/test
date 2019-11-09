import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5etudiantsComponent } from './ex5etudiants.component';

describe('Ex5etudiantsComponent', () => {
  let component: Ex5etudiantsComponent;
  let fixture: ComponentFixture<Ex5etudiantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex5etudiantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex5etudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
