import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheseTopicsComponent } from './about-these-topics.component';

describe('AboutTheseTopicsComponent', () => {
  let component: AboutTheseTopicsComponent;
  let fixture: ComponentFixture<AboutTheseTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheseTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheseTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
