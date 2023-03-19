import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.css']
})
export class ManageEventsComponent implements OnInit {
	@Input() role_code;
	@Input() user_role_name;
  constructor() { }

  ngOnInit() {
  }

}
