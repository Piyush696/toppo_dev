import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyTopicsComponent } from './view-my-topics.component';

describe('ViewMyTopicsComponent', () => {
  let component: ViewMyTopicsComponent;
  let fixture: ComponentFixture<ViewMyTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
