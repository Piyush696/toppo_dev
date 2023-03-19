import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {ZipValidator} from '../../authenticate/register/zipvalidator';
import {AuthService} from '../../../shared/services/auth.service';
import {UserService} from '../../../shared/services/user.service';
import {AlertService} from '../../../shared/services/alert.service';
import {MessageService} from '../../../shared/services/message.service';
import {SiteVariableService} from '../../../shared/services/sitevariable.service';

@Component
({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit
{
  public mask: string = "(999) 000-0000";
  public maskValidation: boolean = true;
  profileForm: FormGroup;
  loading = false;
  error_messages = {};
  site_variables: any;
  profile_data: any;
  submit_error = "";
  user_data: any;
  user_id: number;
  role_code: any;
  dispaly_success_message = "";
  pic = "";
  error_type = "";
  counter = 0;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  @Output () imageChanged = new EventEmitter ();
  
  constructor (
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public zipValidator: ZipValidator,
    private auth: AuthService,
    private user: UserService,
    private message: MessageService,
    private alertService: AlertService,
    private variable: SiteVariableService
  )
  {
  }
  
  async ngOnInit ()
  {
    this.profileForm = this.formBuilder.group (
      {
        user_id: '',
        avatar: '',
        role_code: '',
        upload_path_name: '',
        namefirst: [
          '',
          [Validators.required]
        ],
        namelast: [
          '',
          [Validators.required]
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern ('[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+')
          ]
        ],
        phonemobile: [
          '',
          [Validators.required]
        ],
        address1: '',
        address2: '',
        skype: '',
        phoneother: '',
        zip: [
          '',
          [
            Validators.required,
            Validators.pattern ('[0-9]{5}')
          ],
          this.zipValidator.checkZip.bind (this.zipValidator)
        ],
        city: '',
        state: '',
        country: '',
        cityname: [
          {
            value: '',
            disabled: true
          }
        ],
        statename: [
          {
            value: '',
            disabled: true
          }
        ],
        countryname: [
          {
            value: '',
            disabled: true
          }
        ]
      });
    
    this.user_id = this.user.getCurrentUserId ();
    this.role_code = this.user.getCurrentUserRole ();
    this.user_data = this.auth.getLoginData ();
    
    this.pic = '../../../../../assets/img/admin/avatar/' + this.user_data.user.upload_path_name + '_' + this.user_id + '.png?' + new Date ().getTime ();
    
    this.profile_data = this.user.getProfileData (this.user_id, this.role_code).subscribe (data =>
    {
      this.profile_data = data;
      
      // BINDING PROFILE DATA WITH FORM
      this.profileForm.get ('user_id').setValue (this.user_id);
      this.profileForm.get ('role_code').setValue (this.role_code);
      this.profileForm.get ('upload_path_name').setValue (this.user_data.user.upload_path_name);
      this.profileForm.get ('namefirst').setValue (this.profile_data.namefirst);
      this.profileForm.get ('namelast').setValue (this.profile_data.namelast);
      this.profileForm.get ('email').setValue (this.profile_data.email);
      this.profileForm.get ('phonemobile').setValue (this.profile_data.phonemobile);
      this.profileForm.get ('address1').setValue (this.profile_data.address1);
      this.profileForm.get ('address2').setValue (this.profile_data.address2);
      this.profileForm.get ('skype').setValue (this.profile_data.skype);
      this.profileForm.get ('phoneother').setValue (this.profile_data.phoneother);
      this.profileForm.get ('city').setValue (this.profile_data.city);
      this.profileForm.get ('state').setValue (this.profile_data.state);
      this.profileForm.get ('country').setValue (this.profile_data.country);
      this.profileForm.get ('cityname').setValue (this.profile_data.city);
      this.profileForm.get ('statename').setValue (this.profile_data.state);
      this.profileForm.get ('countryname').setValue (this.profile_data.country);
      this.profileForm.get ('zip').setValue (this.profile_data.zip);
    });
    
    this.profileForm.get ('zip').valueChanges.subscribe (val =>
    {
      
      setTimeout (() =>
      {
        
        if (val.toString ().length == 5)
        {
          var size = Object.keys (this.zipValidator.zipdata).length;
          if (size > 0)
          {
            if (this.error_type == 'zip')
            {
              this.error_type = '';
            }
            // SETTING CITY, STATE AND COUNTRY BY ZIP
            this.profileForm.get ('city').setValue (this.zipValidator.zipdata.city);
            this.profileForm.get ('state').setValue (this.zipValidator.zipdata.state);
            this.profileForm.get ('country').setValue (this.zipValidator.zipdata.country);
            this.profileForm.get ('cityname').setValue (this.zipValidator.zipdata.city);
            this.profileForm.get ('statename').setValue (this.zipValidator.zipdata.state);
            this.profileForm.get ('countryname').setValue (this.zipValidator.zipdata.country);
          }
          else
          {
            this.error_type = 'zip';
          }
        }
        else
        {
          if (this.error_type == 'zip')
          {
            this.error_type = '';
          }
          this.zipValidator.zipdata = {};
          // RESETTING VALUES TO BLANK
          this.profileForm.get ('city').setValue ('');
          this.profileForm.get ('state').setValue ('');
          this.profileForm.get ('country').setValue ('');
          this.profileForm.get ('cityname').setValue ('');
          this.profileForm.get ('statename').setValue ('');
          this.profileForm.get ('countryname').setValue ('');
        }
        
      }, 1500);
      
    });
    
    this.error_messages = await this.message.getMessages ();
    this.site_variables = await this.variable.getSiteVariables ();
    
  }
  
  imageCropped (event)
  {
    this.croppedImage = event.base64;
    this.profileForm.get ('avatar').setValue (
      {
        value: this.croppedImage
      });
  }
  
  onFileChanged (event)
  {
    
    if (event.target.files && event.target.files.length > 0)
    {
      
      let file = event.target.files[0];
      let reader = new FileReader ();
      reader.readAsDataURL (file);
      
      reader.onload = () =>
      {
        
        if (file.type == 'image/png')
        {
          this.error_type = '';
          var img = new Image ();
          img.src = reader.result.toString ();
          img.onload = () =>
          {
            
            if (img.width == img.height && img.width >= this.site_variables.photomin && img.width <= this.site_variables.photomax)
            {
              this.imageChangedEvent = event;
              document.getElementById ("cropper").style.display = "block";
              document.getElementById ("profileimage").style.display = "none";
            }
            else
            {
              this.error_type = 'image_size';
            }
            
          }
          
        }
        else
        {
          this.error_type = 'image_type';
        }
        
      };
    }
    
  }
  
  setDefaultPic ()
  {
    this.pic = './assets/svg/man.svg';
  }
  
  get f ()
  {
    return this.profileForm.controls;
  }
  
  onSubmit ()
  {
    //console.log(this.profileForm.controls);
    if (this.profileForm.invalid)
    {
      for (var key in this.profileForm.value)
      {
        this.profileForm.controls[key].markAsTouched ();
      }
      return;
    }
    
    this.loading = true;
    
    this.user.updateProfile (this.profileForm.value).subscribe (data =>
      {
        if (data)
        {
          if (data.success)
          {
            this.imageChanged.emit (this.counter);
            this.pic = '../../../../../assets/img/admin/avatar/' + this.user_data.user.upload_path_name + '_' + this.user_id + '.png?' + new Date ().getTime ();
            this.dispaly_success_message = this.error_messages['MSG-PROFILE-UPDATE-SUCCESS'];
          }
          else
          {
            if (data.error_type)
            {
              this.error_type = data.error_type;
            }
          }
        }
      },
      error =>
      {
        this.alertService.error (error);
      });
  }
}