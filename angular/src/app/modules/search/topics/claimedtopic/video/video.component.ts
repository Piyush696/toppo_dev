import {Component, OnInit, Input, HostListener, EventEmitter, Output} from '@angular/core';

// ADDING HTML AND CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

// COMPONENT CLASS NAME
export class VideoComponent implements OnInit
{
  @Output () videoEvent = new EventEmitter ();
  @Input ()
  public videoUrl;
  tabHeight: any;
  
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
  
  // VIDEO ENDED TRIGGER EVENT
  triggerEvent ()
  {
    console.log ("video ended")
    this.videoEvent.emit (true)
  }
  
  // RESPONSIVE HANDLING FOR TAB HEIGHT
  updatePageItem ()
  {
    // DECLARING VARIABLE FOR HEIGHT
    let windowHeight = window.innerHeight;
    this.tabHeight = (windowHeight - 290) + 'px';
    console.log (this.tabHeight)
  }
}
