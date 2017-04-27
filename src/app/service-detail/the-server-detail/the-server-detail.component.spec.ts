import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheServerDetailComponent } from './the-server-detail.component';

describe('TheServerDetailComponent', () => {
  let component: TheServerDetailComponent;
  let fixture: ComponentFixture<TheServerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheServerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheServerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
