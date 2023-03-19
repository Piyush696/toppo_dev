import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(private auth: AuthService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
	{
    // FIND CURRENT DOMAIN AND ROUTE
    const currentRoute = window.location.pathname;

    var loggedin = this.auth.isUserLoggedIn();

    if(loggedin)
    {
        this.router.navigate(['/admin']);
        return false;
    }
    return true;
      
	}

}
