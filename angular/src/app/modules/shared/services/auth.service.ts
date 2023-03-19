import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService 
{
    login_data: any;

    constructor(private http: HttpClient) { }

    login(useremail: string, userpassword: string) 
    {
        var apiUrl = `${ environment.apiBase }/${ environment.adminEndpoint }/${ environment.user }`;
        return this.http.post<any>(apiUrl, { useremail: useremail, userpassword: userpassword })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.success) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    
                }

                return user;
            }));
    }

    loginbyusername(username: string, remember: boolean) 
    {
        var apiUrl = `${ environment.apiBase }/${ environment.adminEndpoint }/${ environment.login }`;
        return this.http.post<any>(apiUrl, { username: username, remember:remember})
            .pipe(map(user => 
            {
                //console.log(user);
                // login successful if there's a jwt token in the response
                if (user && user.success) 
                {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('current_role_code', user.user.roles[0].roleId);
                    localStorage.setItem('current_role_name', user.user.roles[0].roleId);
                    localStorage.setItem('items_per_page', user.user.items_per_page);
                }

                return user;
            }));
    }

    register(registerForm: any) 
    {
        var apiUrl = `${ environment.apiBase }/${ environment.adminEndpoint }/${ environment.register }`;
        return this.http.post<any>(apiUrl, registerForm).pipe(map(user => 
        {
            // login successful if there's a jwt token in the response
            if (user && user.success) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
    }

    isUserLoggedIn()
    {
        if(localStorage.getItem('currentUser'))
        {
            this.login_data = JSON.parse(localStorage.getItem('currentUser'));
      
            if(this.login_data && typeof this.login_data === "object")
                return true;
            else
                return false;
        }
        else
            return false;

    }

    getLoginData()
    {
        if(localStorage.getItem('currentUser'))
        {
            this.login_data = JSON.parse(localStorage.getItem('currentUser'));
            return this.login_data;
        }
        else
            return false;
    }


    logout() 
    {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}