import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4coloriageComponent } from './ex4coloriage.component';

describe('Ex4coloriageComponent', () => {
  let component: Ex4coloriageComponent;
  let fixture: ComponentFixture<Ex4coloriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4coloriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4coloriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
