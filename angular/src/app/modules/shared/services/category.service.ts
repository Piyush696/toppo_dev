import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  
  getSimilarWebCategory(): Promise<any>
  {
    return new Promise<any>((resolve, reject) =>
    {
      const apiUrl = `${ environment.apiBase }/${ environment.topicEndpoint }/${ environment.redervedTopicGet }`;
      this.httpClient.post(apiUrl,{})
        .toPromise()
        .then((response) =>
        {
          resolve(response)
        })
        .catch((error) =>
        {
          reject(error)
        })
    })
  }
}
