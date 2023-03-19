import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-change',
	templateUrl: './change.component.html',
	styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

	reset_form: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() 
	{
	    this.reset_form = this.formBuilder.group
	    ({
	        password: ['', Validators.required, Validators.minLength(8)],
	        confirm_password: ['', [Validators.required]]
    	});
	}

	// convenience getter for easy access to form fields
    get f() { return this.reset_form.controls; }


}
