import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

interface sentenceData {
  success: boolean,
  pos: any	
}

@Injectable({
  providedIn: 'root'
})
export class Sentencer 
{
	constructor(private http: HttpClient)  { }

	breakSentence(sentence: string) 
	{
		// GET forbidden messages from API server 
		var apiUrl = `${ environment.apiBase }/${ environment.vendorEndpoint }/${ environment.vendorSentencer }`;
		return this.http.post<sentenceData>(apiUrl, {sentence: sentence});
	}

}
