import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogtopicComponent } from './blogtopic.component';

describe('BlogtopicComponent', () => {
	let component: BlogtopicComponent;
	let fixture: ComponentFixture<BlogtopicComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BlogtopicComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogtopicComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
