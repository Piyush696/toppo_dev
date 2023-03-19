import {Component, OnInit, HostListener, Input, ViewEncapsulation} from '@angular/core';

// ADDING HTML AND CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-claimedtopic',
  templateUrl: './claimedtopic.component.html',
  styleUrls: ['./claimedtopic.component.css'],
  encapsulation: ViewEncapsulation.None
})

// COMPONENT CLASS NAME
export class ClaimedtopicComponent implements OnInit
{
  tickMark:boolean = true;
  introTab: boolean = true;
  overviewTab: boolean = false;
  videoTab: boolean = false;
  pdfTab: boolean = false;
  segueTab:boolean = false;
  loginTab: boolean = false;
  applicationTab: boolean = false;
  
  // CURRENT TAB SELECTED
  showIntroTab: boolean = true;
  showOverviewTab: boolean = false;
  showVideoTab: boolean = false;
  showPdfTab: boolean = false;
  showSegueTab: boolean = false;
  showLoginTab: boolean = false;
  showApplicationTab: boolean = false;
  
  // ON COMPLETE TABS
  onIntroComplete:Boolean = false;
  onVideoTabComplete:boolean = false;
  onOverViewComplete:boolean = false;
  onPdfTabComplete:boolean = false;
  onSegueComplete:boolean = false;
  onLoginTabComplete:boolean = false;
  onApplicatioTabComplete:boolean = false;
  
  // FUNCTION EXECUTED FIRST WHEN COMPONENT LOADED
  ngOnInit (): void
  {
  }
  
  // USED TO PRESERVE SEARCHED VALUE TO DISPLAY IN MAIN HEADER MENU
  @Input ('searchedTerm') searchedTerm = '';
  videoUrl = "assets/video/Nature.mp4";
  overviewUrl = "assets/video/Video2.mp4";
  segueUrl = "assets/video/sequevideo.mp4";
  
  // VIDEO AND OVERVIEW COMPLETE
  onVideoComplete (value: boolean, tab: string)
  {
    if (tab == 'video')
    {
      this.overviewTab = value;
      
      this.showOverviewTab = true;

      this.showVideoTab = false;
      if(this.showOverviewTab == true)
      {
        this.onVideoTabComplete = true;
      }
    }
    else if (tab == 'overview')
    {
      this.pdfTab = value
      this.showPdfTab = true;
      if(this.showPdfTab == true)
      {
        this.onOverViewComplete = true;
      }
      this.showOverviewTab = false;
    }
    else if (tab == 'segue')
    {
      this.loginTab = value
      this.showLoginTab = true;
     
      this.showSegueTab = false;
      if(this.showLoginTab == true)
      {
        this.onSegueComplete = true;
      }
    }
  }
  
  // INTRO PAGE COMPLETE
  onIntroDone (value: boolean)
  {
    this.showVideoTab = true;
    if(this.showVideoTab == true)
    {
      this.onIntroComplete = true;
    }
    this.showIntroTab = false;
    this.videoTab = value
  }
  
  // PDF READ COMPLETE
  onPdfComplete (value: boolean)
  {
    this.showSegueTab = true;
    if(this.showSegueTab == true)
    {
      this.onPdfTabComplete = true;
    }
    this.showPdfTab = false;
    this.segueTab = value
  }
  
  // LOGIN COMPLETE
  onLoginComplete (value: boolean)
  {
    this.showApplicationTab = true;
    if(this.showApplicationTab == true)
    {
      this.onLoginTabComplete = true;
      this.onApplicatioTabComplete = true;
    }
    this.showLoginTab = false;
    this.applicationTab = value;
  }
  
  // ONTAB SELECT EVENT TRIGGER.
  onTabSelect (event)
  {
    console.log (event)
    if (event.title == 'INTRO')
    {
      this.showIntroTab = true;
      this.showVideoTab = false;
    }
    else if (event.title == 'VIDEO')
    {
      this.showVideoTab = true;
      this.showOverviewTab = false;
    }
    else if (event.title == 'OVERVIEW')
    {
      this.showOverviewTab = true;
      this.showPdfTab = false;
    }
    else if (event.title == 'WHITE PAPER')
    {
      this.showPdfTab = true;
      this.showLoginTab = false;
    }
    else if (event.title == 'SEGUE')
    {
      this.showSegueTab = true;
      this.showLoginTab = false;
    }
    else if (event.title == 'LOGIN')
    {
      this.showLoginTab = true;
      this.showApplicationTab = false;
    }
    else if (event.title == 'APPLICATION')
    {
      this.showApplicationTab = true;
    }
  }
}
