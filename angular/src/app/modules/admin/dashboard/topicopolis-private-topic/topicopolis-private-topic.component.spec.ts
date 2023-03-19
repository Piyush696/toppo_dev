import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicopolisPrivateTopicComponent } from './topicopolis-private-topic.component';

describe('TopicopolisPrivateTopicComponent', () => {
  let component: TopicopolisPrivateTopicComponent;
  let fixture: ComponentFixture<TopicopolisPrivateTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicopolisPrivateTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicopolisPrivateTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
