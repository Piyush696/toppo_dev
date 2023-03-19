import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';


interface isLoggedIn {
	status: boolean
}

interface logoutStatus {
	success: boolean
}

@Injectable()
export class UserService {

	login_data: any;

	constructor(private http: HttpClient) { }

	getSomeData() {
		return this.http.get<any>('/api/database.php')
	}

	isLoggedIn(): Observable<isLoggedIn> {
		return this.http.get<isLoggedIn>('/api/isloggedin.php')
	}

	logout() {
		var apiUrl = `${ environment.apiBase }/${ environment.adminEndpoint }/${ environment.logout }`;
		return this.http.get<logoutStatus>(apiUrl)
	}

	getCurrentUserId()
	{
		if(localStorage.getItem('currentUser'))
		{
			this.login_data = JSON.parse(localStorage.getItem('currentUser'));
			return this.login_data.user.user_id;
		}
		else
			return false;
	}

	getCurrentUserRole()
	{
		if(localStorage.getItem('current_role_code'))
		{
			return localStorage.getItem('current_role_code');
		}
		else
			return '';
	}

	getCurrentUserRoleName()
	{
		if(localStorage.getItem('current_role_name'))
		{
			return localStorage.getItem('current_role_name');
		}
		else
			return '';
	}

	getRoleList()
	{
		if(localStorage.getItem('currentUser'))
		{
			this.login_data = JSON.parse(localStorage.getItem('currentUser'));
			if(this.login_data.user.roles){
				return this.login_data.user.roles;
			}
			else
			{
				return false;
			}

		}
		else
			return false;
	}

	getItemsPerPage()
	{
		var items = Number(localStorage.getItem('items_per_page'));
		return items;
	}

	updateItemsPerPage(user_id,number)
	{
		var apiUrl = `${ environment.apiBase }/${ environment.adminEndpoint }/${ environment.update_items_per_page }`;
		this.http.post(apiUrl, {user_id: user_id, number: number}).toPromise();
		localStorage.setItem('items_per_page', number);
	}


	getProfileData(user_id,role_code)
	{
		var apiUrl = `${ environment.apiBase }/${ environment.profileEndpoint }/${ environment.getProfileData }`;
		return this.http.post(apiUrl, {user_id: user_id, role_code: role_code}).map(userdata =>
		{
			return userdata;
		});
	}

	updateProfile(profileData)
	{
		var apiUrl = `${ environment.apiBase }/${ environment.profileEndpoint }/${ environment.updateProfileData }`;
		return this.http.post<any>(apiUrl, profileData).map(user =>
		{
			return user;
		});
	}

	changeRole(current_role_code)
	{	console.log("hello")

		if(localStorage.getItem('currentUser'))
		{
			this.login_data = JSON.parse(localStorage.getItem('currentUser'));
			if(this.login_data.user.roles)
			{
				var rolelist = this.login_data.user.roles;
				var role_code, role_name;
				for(var i=0; i<rolelist.length;i++)
				{
					if(rolelist[i].roleId==current_role_code)
					{
						break;
					}

				}
				if(rolelist[i+1])
				{
					role_code=rolelist[i+1].roleId;
					role_name=rolelist[i+1].roleId;
				}
				else
				{
					role_code=rolelist[0].roleId;
					role_name=rolelist[0].roleId;
				}

				localStorage.setItem('current_role_code', role_code);
				localStorage.setItem('current_role_name', role_name);

			}
		}
	}

	// GET HOME CONTENT
	getHomeContent(topic)
	{
		var apiUrl = `${ environment.apiBase }/${ environment.topicEndpoint }/${ environment.getHomeContent }`;
		return this.http.post<any>(apiUrl, {'searchedTopic': topic}).map(content =>
		{
			return content && content[0];
		});
	}

  // UPDATE HOME CONTENT
  updateHomeContent(content)
  {
    var apiUrl = `${ environment.apiBase }/${ environment.adminEndpoint }/${ environment.update_home_page_data }`;
    return this.http.post<any>(apiUrl, content).map(content =>
    {
      return content;
    });
  }


}
