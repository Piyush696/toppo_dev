import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThesePagesComponent } from './about-these-pages.component';

describe('AboutThesePagesComponent', () => {
  let component: AboutThesePagesComponent;
  let fixture: ComponentFixture<AboutThesePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutThesePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutThesePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
