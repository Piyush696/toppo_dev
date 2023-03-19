import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { InputsModule } from '@progress/kendo-angular-inputs';

import { MessageService } from '../../../shared/services/message.service';
import { AuthService } from '../../../shared/services/auth.service';
import { AlertService } from '../../../shared/services/alert.service';
import { ZipValidator } from './zipvalidator';
import { first } from 'rxjs/operators';

function passwordConfirming(c: AbstractControl): any
{
    if(!c.parent || !c) return;
    const pwd = c.parent.get('password');
    const cpwd= c.parent.get('confirm_password')

    if(!pwd || !cpwd) return ;
    if (pwd.value !== cpwd.value)
    {
        return { invalid: true };
	}
}


@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{
    public mask: string = "(999) 000-0000";
    public maskValidation: boolean = true;

	registerForm: FormGroup;
	hide = true;
    error_messages = {};
    register_error="";
    register_success=false;

    get cpwd() {
      return this.registerForm.get('confirm_password');
     }

	constructor(
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
        private router: Router,
        private auth: AuthService,
        private alertService: AlertService,
        public zipValidator: ZipValidator,
        private message: MessageService,
		) { }

	async ngOnInit()
	{
        // REDIRECT TO SEARCH IF USER
        if(window.location.host === 'topicopolis.com')
        {
            this.router.navigate(['search']);
        }

		this.registerForm = this.formBuilder.group(
		{
	      'first_name': [null, [Validators.required]],
	      'last_name': [null, [Validators.required]],
	      'email': [null, [Validators.required,  Validators.pattern('[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+')]],
	      'skype': '',
	      'phonemobile': [null, [Validators.required]],
	      'phoneother': '',
	      'address1': '',
	      'address2': '',
	      'zip':  [null, [Validators.required], this.zipValidator.checkZip.bind(this.zipValidator), Validators.pattern('\d{5}')],
	      'city': '',
	      'state': '',
	      'country': '',
	      'password': [null, [Validators.required, Validators.minLength(8)]],
	      'confirm_password': [null, [Validators.required, passwordConfirming]]
	    });

        this.error_messages= await this.message.getMessages();
	}

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

	OnSubmit()
	{
		// stop here if form is invalid
        if (this.registerForm.invalid)
        {
            return;
        }

        this.auth.register(this.registerForm.value)
            .pipe(first())
             .subscribe(
                data => {
                    console.log(data);
                    if(data.success)
                    {
                        // this.router.navigate(['admin']);
                        this.register_success=true;

                    }
                    else
                    {
                        this.register_error=data.error_type;

                    }
                },
                error => {
                    this.alertService.error(error);
                });
    }
}
