import {Component, OnInit, HostListener, Input, Output, EventEmitter} from '@angular/core';

// ADDING HTML AND CSS TO THIS COMPONENT
@Component
({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

// COMPONENT CLASS NAME
export class IntroComponent implements OnInit
{
  @Output () introEvent = new EventEmitter ();
  
  // GET THE WIDTH OF SCREEN
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    // CALLED UPDATE ITEM FUNCTION
    //this.updatePageItem();
    this.updatePage ();
  }
  
  textFont = '22px';
  headingFont = '30px';
  buttonText = '16px';
  tabHeight: any= "tabHeight";
  switchButton;
  windowHeight;
  windowWidth;
  @Input ('searchedTerm') searchedTerm = '';
  
  // FUNCTION EXECUTED FIRST WHEN COMPONENT LOADED
  ngOnInit ()
  {
    this.onResize ();
  }
  
  // RESPONSIVE HANDLING FOR TAB HEIGHT
  updatePage ()
  {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    if (window.innerWidth <= 1320)
    {
      this.textFont = '20px';
      this.headingFont = '26px';
      this.buttonText = '14px';
    }
    else
    {
      this.textFont = '22px';
      this.headingFont = '30px';
      this.buttonText = '16px';
    }
    
    // RESPONSIVE HANDLING FOR NEXT TAB BUTTON
    if (window.innerWidth > 1470)
    {
      this.switchButton = true;
    }
    else
    {
      this.switchButton = false;
    }
    
    // RESPONSIVE HANDLING FOR NEXT TAB BUTTON
    if (window.innerWidth < 930)
    {
      this.switchButton = true;
    }
    else
    {
      this.switchButton = false;
    }
    
    // RESPONSIVE HANDLING FOR TAB HEIGHT
    if (window.innerHeight <= 733)
    {
      this.tabHeight = (window.innerHeight - 178) + 'px';
      this.textFont = '20px';
      this.headingFont = '26px';
      this.buttonText = '14px';
    }
    else
    {
      this.tabHeight = (this.windowHeight - 290) + 'px';
    }
  }
  
  //VIDEO ENDED TRIGGER EVENT
  onClickVideo ()
  {
    this.introEvent.emit (true)
  }
}
