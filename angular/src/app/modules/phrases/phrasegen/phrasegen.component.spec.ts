import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasegenComponent } from './phrasegen.component';

describe('PhrasegenComponent', () => {
  let component: PhrasegenComponent;
  let fixture: ComponentFixture<PhrasegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
