import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { delay } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ZipService 
{
	constructor(private http: HttpClient)  { }
	getValidZip(zip: string) 
	{
		// GET forbidden messages from API server 
		return this.http.post<any>('/api/common/zip.php', {zip: zip});
	}
}