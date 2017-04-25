import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheServerComponent } from './the-server.component';

describe('TheServerComponent', () => {
  let component: TheServerComponent;
  let fixture: ComponentFixture<TheServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
