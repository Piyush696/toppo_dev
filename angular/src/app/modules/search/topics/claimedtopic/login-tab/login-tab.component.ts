import {Component, OnInit, Output, EventEmitter, HostListener} from '@angular/core';

// ADDING HTML AND CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-login-tab',
  templateUrl: './login-tab.component.html',
  styleUrls: ['./login-tab.component.css']
})

// COMPONENT CLASS NAME
export class LoginTabComponent implements OnInit
{
  @Output () applicationEvent = new EventEmitter ();
  isReset: boolean = true;
  tabHeight: any;
  windowHeight;
  windowWidth;
  // FUNCTION EXECUTED WHEN PAGE RESIZE
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    // CALLED UPDATE ITEM FUNCTION
    this.updatePageItem ();
  }
  // FUNCTION EXECUTED FIRST WHEN COMPONENT LOADED
  ngOnInit ()
  {
    this.updatePageItem ();
  }
  
  // EVENT EMITTED WHEN LOGIN BUTTON CLICKED
  onLoginComplete (value: boolean)
  {
    this.applicationEvent.emit (true);
  }

  // RESPONSIVE HANDLING FOR TAB HEIGHT
  updatePageItem ()
  {
    // DECLARING VARIABLE FOR HEIGHT
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.tabHeight = (this.windowHeight - 420) + 'px';
    console.log (this.tabHeight)
  }
}
