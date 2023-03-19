import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthService} from '../../../shared/services/auth.service';
import {AlertService} from '../../../shared/services/alert.service';
import {MessageService} from '../../../shared/services/message.service';

// ADDING HTML AND CSS FILES FOR THIS COMPONENT
@Component
({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// MAIN COMPONENT CLASS FOR THIS COMPONENT THAT WLL BE IMPORTED TO ANOTHER COMPONENT
export class LoginComponent implements OnInit
{
  loginForm: FormGroup;
  loading = false;
  error_messages = {};
  login_error = '';
  
  // DEFAULT CONSTRUCTOR FOR THE COMPONENT CLASS, CONSTRUCTOR IS CALLED BY DEFAULT WHEN COMPONENT LOADED
  constructor
  (
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private message: MessageService,
    private alertService: AlertService
  )
  {
    
    // ANY CODE IN THIS BLOCK WILL RUN BEFORE LOADING THE COMPONENT
  }
  
  // THIS FUNCTION WILL RUN ON COMPONENT INITIALIZATION
  async ngOnInit()
  {
    
    // REDIRECT TO SEARCH IF USER IS NOT LOGGED IN
    if(window.location.host === 'topicopolis.com')
    {
      this.router.navigate(['search']);
    }
    
    // APPLYING ANGULAR REACTIVE FORM CONFIGURAION
    this.loginForm = this.formBuilder.group(
    {
      username: [
        '',
        [Validators.required]
      ],
      remember: []
    });
    
    // REDIRECTING TO ADMIN PORTAL USER IF LOGGED IN
    if(this.auth.isUserLoggedIn())
    {
      this.router.navigate(['admin']);
    }
    
    // GETTING ERROR MESSAGES FROM DATABASE
    this.error_messages = await this.message.getMessages();

  }
  
  // THIS FUNCTION WILL RETURN THE REACTIVE FORM CONTROLS
  get f()
  {
    return this.loginForm.controls;
  }
  
  // ON SUBMITTING THE LOGIN FORM
  onSubmit()
  {
    
    // STOP HERE IF THE FORM IS INVALID
    if(this.loginForm.invalid)
    {
      return;
    }
    this.loading = true;
    
    // CALLING LOGIN API
    this.auth.loginbyusername(this.f.username.value, this.f.remember.value).pipe(first ()).subscribe(data =>
    {
      
      // REMOVING CURRENT COMPONENT FROM LOCAL STORAGE WHEN LOGGING IN
      localStorage.removeItem('currentComponent');
      
      // IF API RESPONSE IS SUCCESSFUL
      if(data.success)
      {
        this.router.navigate(['admin']);
      }
      else
      {
        this.login_error = data.error_type;
      }
    },
    error =>
    {
      this.alertService.error(error);
    });
  }
}
