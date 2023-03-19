import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZipService } from '../../../shared/services/zip.service';

@Injectable({providedIn: 'root'})
export class ZipValidator 
{
	debouncer: any;
	zipdata: any;
 
	constructor(public zipService: ZipService){}
 
	checkZip (control: FormControl): any 
	{
		clearTimeout(this.debouncer);
		return new Promise(resolve => 
		{
			this.debouncer = setTimeout(() => 
				{
					this.zipService.getValidZip(control.value).subscribe((res) => 
					{
						if(res.success)
						{
						  resolve(null);
						  this.zipdata= res.zipdata[0];
						}
						else 
						{
						  resolve({'validzip': true});
						}
					}, (err) => 
					{
						resolve({'validzip': true});
					});
		 
				}, 3);     
		});
	}
}
 
