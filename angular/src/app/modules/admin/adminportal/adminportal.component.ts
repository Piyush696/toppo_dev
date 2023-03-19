import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {UserService} from '../../shared/services/user.service';

// COMPONENT HTML AND CSS FILES
@Component
({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})

// COMPONENT CLASS NAME
export class AdminportalComponent implements OnInit
{
  user_data: any;
  current_links: any;
  role_code: any;
  user_role_name: string;
  role_list: Array<any>;
  loadComponent = '';
  pic = "";
  animationState = 'out';
  
  // COMPONENT CONSTRUCTOR
  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private user: UserService
  )
  {
  }
  
  ngOnInit ()
  {
    // REDIRECT TO SEARCH IF USER
    if (window.location.host === 'topicopolis.com')
    {
      this.router.navigate (['search']);
    }
    // REDIRECT TO LOGIN PAGE IF NOT LOGGED IN
    if (!this.auth.isUserLoggedIn ())
    {
      this.router.navigate (['login']);
    }
    
    this.role_code = this.user.getCurrentUserRole ();
    console.log (this.role_code)
    
    //ACCESS DASHBOARD TOPICS
    if (this.role_code == 'ADMIN')
    {
      this.loadComponent = 'app-create-topics';
    }
    else
    {
      this.loadComponent = 'app-view-my-topics';
    }
    
    // USER'S ROLE NAME  AND LINKS
    this.user_role_name = this.user.getCurrentUserRoleName ();
    this.role_list = this.user.getRoleList ();
    //CURRENT USER'S ROLE_ID AND LINKS.
    var x = this.role_list.find (role =>
    {
      return role.roleId == this.user_role_name
    })
    //CURRENT_LINKS
    this.current_links = x.links;
    this.user_data = this.auth.getLoginData ();
    
    if (this.user_data.user)
    {
      this.pic = '../../../../assets/img/admin/avatar/' + this.user_data.user.upload_path_name + '_' + this.user_data.user.user_id + '.png?' + new Date ().getTime ();
    }
    
  }
  
  updateAvatar ()
  {
    if (this.user_data.user)
    {
      this.pic = '../../../../assets/img/admin/avatar/' + this.user_data.user.upload_path_name + '_' + this.user_data.user.user_id + '.png?' + new Date ().getTime ();
    }
  }
  
  setDefaultPic ()
  {
    this.pic = './assets/svg/man.svg';
  }
  
  loadComponentData (event, data)
  {
    event.preventDefault ();
    this.loadComponent = data;
  }
  
  //ON ROLE_ID CHANGE OF CURRENT USER'S
  changeRole ()
  {
    this.user.changeRole (this.role_code);
    this.role_code = this.user.getCurrentUserRole ();
    this.user_role_name = this.user.getCurrentUserRoleName ();
    //CURRENT USER'S ROLE_ID AND LINKS.
    var x = this.role_list.find (role =>
    {
      return role.roleId == this.user_role_name
    })
    // HIS LINKS
    this.current_links = x.links;
  }
  
  doLogout (event)
  {
    event.preventDefault ();
    this.auth.logout ();
    this.router.navigate (['login']);
  }
  
}
