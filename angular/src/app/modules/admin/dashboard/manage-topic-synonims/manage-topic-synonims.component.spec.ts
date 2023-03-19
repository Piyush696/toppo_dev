import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTopicSynonimsComponent } from './manage-topic-synonims.component';

describe('ManageTopicSynonimsComponent', () => {
  let component: ManageTopicSynonimsComponent;
  let fixture: ComponentFixture<ManageTopicSynonimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTopicSynonimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTopicSynonimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
