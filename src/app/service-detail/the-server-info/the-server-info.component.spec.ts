import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheServerInfoComponent } from './the-server-info.component';

describe('TheServerInfoComponent', () => {
  let component: TheServerInfoComponent;
  let fixture: ComponentFixture<TheServerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheServerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheServerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
