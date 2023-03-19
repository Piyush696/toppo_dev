import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';

interface messageData {
	success: boolean,
	message: {}
}

@Injectable({
	providedIn: 'root'
})
export class MessageService {
	private messages;


	constructor(private http: HttpClient) { }

	getServerMessages() {
		var apiUrl = `${environment.apiBase}/${environment.commonEndpoint}/${environment.messages}`;
		// GET forbidden messages from API server 
		return this.http.post<messageData>(apiUrl, {});
	}

	async setMessages() {
		var apiUrl = `${environment.apiBase}/${environment.globalEndpoint}/${environment.messages}`;
		this.messages = await this.http.get(apiUrl, {}).toPromise();
		console.log(this.messages)
	}



	async getMessages() {
		if (this.messages) {
			return await this.messages.message;
		}
		else {
			await this.delay(500);
			return await this.getMessages();
		}

	}

	private delay(ms: number) {
		return new Promise(resolve =>
			setTimeout(resolve, ms));
	}

}
