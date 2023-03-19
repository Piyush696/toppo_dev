import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAnalyticsComponent } from './topic-analytics.component';

describe('TopicAnalyticsComponent', () => {
  let component: TopicAnalyticsComponent;
  let fixture: ComponentFixture<TopicAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
