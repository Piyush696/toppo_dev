import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class TabTypeService
{

	constructor(private http: HttpClient) { }

	getTabTypes(topic)
	{
		const apiUrl = `${ environment.apiBase }/${ environment.tabtypeEndpoint }/${ environment.getTabTypes }`;
		return this.http.post<any>(apiUrl,{'selectedtopic': topic}).map(data =>
		{
			return data;
		});
	}

}
