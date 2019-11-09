import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2OrientationComponent } from './ex2-orientation.component';

describe('Ex2OrientationComponent', () => {
  let component: Ex2OrientationComponent;
  let fixture: ComponentFixture<Ex2OrientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2OrientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2OrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
