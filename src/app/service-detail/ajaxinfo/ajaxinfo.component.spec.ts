import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxinfoComponent } from './ajaxinfo.component';

describe('AjaxinfoComponent', () => {
  let component: AjaxinfoComponent;
  let fixture: ComponentFixture<AjaxinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
