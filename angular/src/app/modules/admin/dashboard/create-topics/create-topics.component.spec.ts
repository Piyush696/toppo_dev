import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedTopicComponent } from './reserved-topic.component';

describe('ReservedTopicComponent', () => {
  let component: ReservedTopicComponent;
  let fixture: ComponentFixture<ReservedTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
