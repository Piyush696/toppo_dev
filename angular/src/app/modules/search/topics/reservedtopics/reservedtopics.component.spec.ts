import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedtopicsComponent } from './reservedtopics.component';

describe('ReservedtopicsComponent', () => {
  let component: ReservedtopicsComponent;
  let fixture: ComponentFixture<ReservedtopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedtopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedtopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
