import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimedHomeComponent } from './claimed-home.component';

describe('ClaimedHomeComponent', () => {
  let component: ClaimedHomeComponent;
  let fixture: ComponentFixture<ClaimedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
