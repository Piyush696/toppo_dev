import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

interface forbiddenData {
	success: boolean,
	words: {}
}

@Injectable({
	providedIn: 'root'
})
export class ForbiddenWords {
	private words;

	constructor(private http: HttpClient) { }

	getWords() {
		var apiUrl = `${environment.apiBase}/${environment.globalEndpoint}/${environment.forbidden}`;
		// GET forbidden messages from API server 
		return this.http.get<forbiddenData>(apiUrl, {});
	}

	async setWords() {
		var apiUrl = `${environment.apiBase}/${environment.globalEndpoint}/${environment.forbidden}`;
		this.words = await this.http.get(apiUrl, {}).toPromise();
	}

	async getForbiddenWords() {
		if (this.words) {
			return await this.words.words;
		}
		else {
			await this.delay(500);
			return await this.getForbiddenWords();
		}

	}

	private delay(ms: number) {
		return new Promise(resolve =>
			setTimeout(resolve, ms));
	}
}
