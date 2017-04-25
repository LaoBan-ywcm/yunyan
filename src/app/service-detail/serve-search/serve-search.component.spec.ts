import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeSearchComponent } from './serve-search.component';

describe('ServeSearchComponent', () => {
  let component: ServeSearchComponent;
  let fixture: ComponentFixture<ServeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
