import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CNetworkCardComponent } from './c-network-card.component';

describe('CNetworkCardComponent', () => {
  let component: CNetworkCardComponent;
  let fixture: ComponentFixture<CNetworkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CNetworkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CNetworkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
