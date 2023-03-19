import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTopicTabContentComponent } from './manage-topic-tab-content.component';

describe('ManageTopicTabContentComponent', () => {
	let component: ManageTopicTabContentComponent;
	let fixture: ComponentFixture<ManageTopicTabContentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ManageTopicTabContentComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ManageTopicTabContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
