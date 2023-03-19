import {Component, OnInit, HostListener, Input, ElementRef, Directive} from '@angular/core';
import * as _ from 'lodash';

// HTML AND CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

// CLASS NAME FOR THIS COMPONENT
export class SidebarComponent implements OnInit
{
  animateTop:boolean = true;
  topicOwner = 'Streaming now:';
  topicOwnerRole = 'The Hyperloop-';
  topicOwnerRol = 'with Elon Musk';
  event = 'Event of the day';
  bikes = 'The Newest Pedago Electric Bikes';
  event1 = 'Tonight,7:30pm EST';
  newBikes = 'Topic New Bikes';
  bikesInfo = 'Recently Pedago came out with a new line of bikes.These new bikes have a stylish,retro look that has wowed us in the electric bike community.We will be talking about those looks as well as the specifications and performance.We discuss up and coming manufactures of electric bikes,as well as new release from more established manufactures.';
  fontSize: any;
  headSize: any;
  marginTop = '0px';
  streamingNowHeight: string;
  showcontent: boolean = true;
  showBar: boolean = true;
  sidebarHeight: string;
  sidebarWidth: string;
  buttonWidth: string;
  
  // FUNCTION CALL WHEN RESIZE OF WINDOW HAPPENS
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    // CALLED UPDATE ITEM FUNCTION
    this.updatePageItem ();
  }
  
  @Input ('MytextSize') tsize: string;
  
  // CONSTRUCTOR FOR THIS CLASS
  constructor (private elRef: ElementRef)
  {
    this.onResize ();
  }
  
  // LIFECYCLE HOOK TO CALL WHEN COMPONENT LOADS
  ngOnInit ()
  {
    //CALLED UPDATE PAGE ITEM FUNCTION
    this.updatePageItem ();
  }
  
  // FUNCTION TO HANDLE RESPONSIVENESS OF THE PAGE
  updatePageItem ()
  {
    // DECLARING VARIABLE FOR HEIGHT
    var windowHeight = window.innerHeight;
    
    // DECLARING VARIABLE FOR WIDTH
    var windowWidth = window.innerWidth;
    
    // REDUCING THE WIDTH OF THE SIDEBAR BASED ON SCREEN SIZE
    if (windowWidth <= 2200 && windowWidth > 850)
    {
      this.sidebarWidth = '290px';
      this.buttonWidth = '265px';
    }
    else if (windowWidth <= 850 && windowWidth > 750)
    {
      this.sidebarWidth = '240px';
      this.buttonWidth = '220px';
      this.headSize = '1rem';
    }
    else
    {
      this.sidebarWidth = '240px';
      this.buttonWidth = '220px';
      this.headSize = '1rem';
    }
    
    // REDUCING THE BACKGROUND HEIGHT BASED ON SCREEN SIZE
    this.sidebarHeight = (windowHeight - 155) + 'px';
    // CHANGING VALUES TO HANDLE RESPONSIVENESS BASED ON HEIGHT AND WIDTH
    if (windowWidth > 1920 && windowHeight < 600)
    {
      this.showBar = false;
    }
    else if (windowHeight <= 600)
    {
      this.showBar = false;
    }
    else if (windowWidth <= 1920 && windowWidth > 767 && windowHeight <= 600)
    {
      this.showBar = false;
    }
    else if (windowWidth <= 767 && windowHeight > 600 && windowHeight <= 1200)
    {
      this.showBar = false;
    }
    else if (windowWidth > 1920 && windowHeight <= 600)
    {
      this.streamingNowHeight = '175px';
      this.headSize = '1rem';
      this.showcontent = false;
      this.showBar = true;
    }
    else if (windowWidth <= 1920 && windowWidth > 850 && windowHeight > 500 && windowHeight <= 600)
    {
      this.streamingNowHeight = '175px';
      this.headSize = '1.1rem';
      this.showcontent = false;
      this.showBar = true;
    }
    else if (windowWidth <= 850 && windowWidth > 767 && windowHeight > 500 && windowHeight <= 600)
    {
      this.streamingNowHeight = '175px';
      this.headSize = '1.1rem';
      this.showcontent = false;
      this.showBar = true;
    }
    else if (windowWidth <= 1920 && windowWidth > 850 && windowHeight > 600 && windowHeight <= 700)
    {
      this.streamingNowHeight = '175px';
      this.headSize = '1.2rem';
      this.showcontent = false;
      this.showBar = true;
    }
    else if (windowWidth <= 850 && windowWidth > 767 && windowHeight > 600 && windowHeight <= 700)
    {
      this.streamingNowHeight = '175px';
      this.headSize = '1.1rem';
      this.showcontent = false;
      this.showBar = true;
    }
    else if (windowWidth <= 1920 && windowWidth > 850 && windowHeight > 700 && windowHeight <= 800)
    {
      this.streamingNowHeight = '195px';
      this.fontSize = '13px';
      this.headSize = '1.25rem';
      this.bikesInfo = 'Recently Pedago came out with a new line of bikes.';
      this.showcontent = true;
      this.showBar = true;
    }
    else if (windowWidth <= 850 && windowWidth > 767 && windowHeight > 700 && windowHeight <= 800)
    {
      this.streamingNowHeight = '195px';
      this.fontSize = '12px';
      this.headSize = '1.1rem';
      this.bikesInfo = 'Recently Pedago came out with a new line of bikes.';
      this.showcontent = true;
      this.showBar = true;
    }
    else if (windowWidth <= 1920 && windowWidth > 850 && windowHeight > 800 && windowHeight <= 900)
    {
      this.streamingNowHeight = '195px';
      this.fontSize = '14px';
      this.headSize = '1.3rem';
      this.bikesInfo = 'Recently Pedago came out with a new line of bikes.These new bikes have a stylish,retro look that has wowed us in the electric bike community.';
      this.showcontent = true;
      this.showBar = true;
    }
    else if (windowWidth <= 850 && windowWidth > 767 && windowHeight > 800 && windowHeight <= 900)
    {
      this.streamingNowHeight = '195px';
      this.fontSize = '14px';
      this.headSize = '1.1rem';
      this.bikesInfo = 'Recently Pedago came out with a new line of bikes.These new bikes have a stylish,retro look that has wowed us in the electric bike community.';
      this.showcontent = true;
      this.showBar = true;
    }
    else if (windowWidth <= 1920 && windowWidth > 850 && windowHeight > 900 && windowHeight <= 1080)
    {
      this.streamingNowHeight = '195px';
      this.fontSize = '15.5px';
      this.headSize = '1.35rem';
      this.bikesInfo = 'Recently Pedago came out with a new line of bikes.These new bikes have a stylish,retro look that has wowed us in the electric bike community.We will be talking about those looks as well as the specifications and performance.We discuss up and coming manufactures of electric bikes,as well as new release from more established manufactures.';
      this.showcontent = true;
      this.showBar = true;
    }
    else if (windowWidth <= 850 && windowWidth > 767 && windowHeight > 900 && windowHeight <= 1080)
    {
      this.streamingNowHeight = '195px';
      this.fontSize = '13.5px';
      this.headSize = '1.1rem';
      this.bikesInfo = 'Recently Pedago came out with a new line of bikes.These new bikes have a stylish,retro look that has wowed us in the electric bike community.We will be talking about those looks as well as the specifications and performance.We discuss up and coming manufactures of electric bikes,as well as new release from more established manufactures.';
      this.showcontent = true;
      this.showBar = true;
    }
  }
}

