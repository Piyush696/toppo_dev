import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTopicTabsComponent } from './manage-topic-tabs.component';

describe('ManageTopicTabsComponent', () => {
	let component: ManageTopicTabsComponent;
	let fixture: ComponentFixture<ManageTopicTabsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ManageTopicTabsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ManageTopicTabsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
