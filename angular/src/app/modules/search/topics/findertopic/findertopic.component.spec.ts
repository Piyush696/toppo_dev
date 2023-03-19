import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FindertopicComponent } from './findertopic.component';

describe('FindertopicComponent', () => {
  let component: FindertopicComponent;
  let fixture: ComponentFixture<FindertopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindertopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindertopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
