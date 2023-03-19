import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTopicRelationshipsComponent } from './manage-topic-relationships.component';

describe('ManageTopicRelationshipsComponent', () => {
  let component: ManageTopicRelationshipsComponent;
  let fixture: ComponentFixture<ManageTopicRelationshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTopicRelationshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTopicRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
