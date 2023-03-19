import {Component, OnInit, Input, HostListener} from '@angular/core';

// ADDING HTML AND CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

// COMPONENT CLASS NAME
export class RegisterComponent implements OnInit
{
  windowHeight:any;
  windowWidth:any;
  @Input ()  isReset: boolean;
  
  // FUNCTION CALLED EACH TIME WHEN RESIZE IS DONE
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }
  
  // FUNCTION EXECUTED FIRST WHEN COMPONENT LOADED
  ngOnInit ()
  {
    this.onResize();
  }
}
