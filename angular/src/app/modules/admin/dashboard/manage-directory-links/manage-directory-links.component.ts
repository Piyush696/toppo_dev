import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manage-directory-links',
  templateUrl: './manage-directory-links.component.html',
  styleUrls: ['./manage-directory-links.component.css']
})
export class ManageDirectoryLinksComponent implements OnInit {
	@Input() role_code;
	@Input() user_role_name;
  	constructor() { }

  	ngOnInit() {
  	}

}
