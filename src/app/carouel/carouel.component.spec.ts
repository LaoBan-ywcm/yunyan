import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouelComponent } from './carouel.component';

describe('CarouelComponent', () => {
  let component: CarouelComponent;
  let fixture: ComponentFixture<CarouelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
