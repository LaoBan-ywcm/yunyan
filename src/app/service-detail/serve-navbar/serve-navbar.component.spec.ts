import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeNavbarComponent } from './serve-navbar.component';

describe('ServeNavbarComponent', () => {
  let component: ServeNavbarComponent;
  let fixture: ComponentFixture<ServeNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
