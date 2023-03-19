import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.component.html',
	styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

	forgot_form: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() 
	{
	    this.forgot_form = this.formBuilder.group
	    ({
	        useremail: ['', Validators.required],
    	});
	}

	// convenience getter for easy access to form fields
    get f() { return this.forgot_form.controls; }


}
