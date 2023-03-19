import {Component, OnInit, Output, EventEmitter, HostListener} from '@angular/core';

// ADDING HTML AND CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// COMPONENT CLASS NAME
export class LoginComponent implements OnInit
{
  @Output () applicationEvent = new EventEmitter ();
  windowHeight:any;
  windowWidth:any;
  tabHeight: any;

  // FUNCTION EXECUTED WHEN PAGE RESIZE
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    // CALLED UPDATE ITEM FUNCTION
    this.updatePageItem ();
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }
  
  // FUNCTION EXECUTED FIRST WHEN COMPONENT LOADED
  ngOnInit ()
  {
    this.updatePageItem ();
    
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }
  
  // LOGIN COMPLETE BUTTON CLICKED
  onLogIn ()
  {
    this.applicationEvent.emit (true);
  }
  
  // RESPONSIVE HANDLING FOR TAB HEIGHT
  updatePageItem ()
  {
    // DECLARING VARIABLE FOR HEIGHT
    let windowHeight = window.innerHeight;
    this.tabHeight = (windowHeight - 420) + 'px';
    console.log (this.tabHeight)
  }
}
