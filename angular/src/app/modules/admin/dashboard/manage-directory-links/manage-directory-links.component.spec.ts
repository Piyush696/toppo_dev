import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDirectoryLinksComponent } from './manage-directory-links.component';

describe('ManageDirectoryLinksComponent', () => {
  let component: ManageDirectoryLinksComponent;
  let fixture: ComponentFixture<ManageDirectoryLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDirectoryLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDirectoryLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
