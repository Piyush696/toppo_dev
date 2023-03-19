import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private auth: AuthService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
	{
	    // LIST OF USER AND ADMIN ROUTE
      var userRoute = ['/search'];
      var adminRoute = ['/admin', '/login', '/register'];

      // FIND CURRENT DOMAIN AND ROUTE
      const currentRoute = window.location.pathname;
      const currentSubDomain = window.location.host;

      // LOAD COMPONENT BASED ON SUB DOMAIN
      if(currentSubDomain === 'topicopolis.com')
      {
          if(userRoute.includes(currentRoute))
          {
              return true;
          }
          else
          {
              this.router.navigate(['/search']);
              return false;
          }
      }
      else
      {
          if(adminRoute.includes(currentRoute))
          {
              return true;
          }
          else
          {
              this.router.navigate(['/admin']);
              return false;
          }

      }
	}

}
