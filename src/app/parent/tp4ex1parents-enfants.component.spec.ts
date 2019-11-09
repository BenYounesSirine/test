import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp4ex1parentsEnfantsComponent } from './tp4ex1parents-enfants.component';

describe('Tp4ex1parentsEnfantsComponent', () => {
  let component: Tp4ex1parentsEnfantsComponent;
  let fixture: ComponentFixture<Tp4ex1parentsEnfantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tp4ex1parentsEnfantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tp4ex1parentsEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
