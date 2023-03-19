import { Component, OnInit } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-message-center',
  templateUrl: './message-center.component.html',
  
  styleUrls: ['./message-center.component.css']
})
export class MessageCenterComponent implements OnInit 
{
  pic = '';
  date = new Date();
  day = this.date.getDate();
  month = this.date.getMonth();
  year = this.date.getFullYear();
  public value: Date = new Date (this.year, this.month, this.day);
  
  constructor ()
  {
    
  }

    ngOnInit() 
    {
    }


    public onLeftTabSelect(e)
    {
    	console.log(e);
    }

    setDefaultPic()
    {
      this.pic ='./assets/svg/man.svg';
    }

}
