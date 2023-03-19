import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SiteVariableService {
  public variables;

  // CLASS CONSTRUCTOR
  constructor(private http: HttpClient) {
  }

  // SETTING SITE VARIABLE FROM DATABASE
  async setSiteVariables() {
    var apiUrl = `${environment.apiBase}/${environment.globalEndpoint}/${environment.site_variables}`;
    this.variables = await this.http.get(apiUrl, {}).toPromise();
  }

  // RETURNING SITE VARIABLE TO DIFFERENT COMPONENT DATABASE
  async getSiteVariables() {
    if (this.variables) {
      return await this.variables.variables;
    }
    else {
      await this.delay(400);
      return await this.getSiteVariables();
    }

  }

  // SET TIMEOUT DELAY TO CHECK AGAIN
  private delay(ms: number) {
    return new Promise(resolve =>
      setTimeout(resolve, ms));
  }

}
