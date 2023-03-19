import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-findertopic',
	templateUrl: './findertopic.component.html',
	styleUrls: ['./findertopic.component.css']
})
export class FindertopicComponent implements OnInit {

	// HOLD CHILD TAB SEND BY PARENT COMPONENT
	@Input('childTab') childTab = [];

	// HOLD SELECTED TAB
	public selected: number = 0;

	constructor() { }

	ngOnInit() { }

}
