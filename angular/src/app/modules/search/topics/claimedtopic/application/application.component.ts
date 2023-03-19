import {Component, OnInit, HostListener} from '@angular/core';

// ADDING HTML AND CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

// COMPONENT CLASS NAME
export class ApplicationComponent implements OnInit
{
  textHeight = '413px';
  textareaHeight = '60px';
  tabHeight: any;
  UsHeight: any;
  UltimateHeight: any;
  KendoTabHeight: any;
  CostHeight: any;
  MinHeight: any;
  MaxHeight: any;
  CustomTab1: boolean = false;
  CustomTab: boolean = true;
  BottomSecHeight: any;
  TextAreaHeight: any;
  windowHeight: any;
  windowWidth: any;
  textWidth: any
  textareaWidth: any;
  PargraphFont: any
  
  // FUNCTION CALLED EACH TIME WHEN RESIZE IS DONE
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    // CALLED UPDATE ITEM FUNCTION
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.updateTextArea ()
  }
  
  // FUNCTION EXECUTED FIRST WHEN COMPONENT LOADED
  ngOnInit ()
  {
    this.onResize ();
  }
  
  // RESPONSIVENESS FOR TEXT AREA
  updateTextArea ()
  {
    this.tabHeight = (this.windowHeight - 284) + 'px';
    let numHeight = (this.windowHeight - 284);
    this.KendoTabHeight = (this.windowHeight - 299) + 'px';
    let kendoHeight = (this.windowHeight - 299);
    
    // RESPONSIVENESS LOGIC
    if (this.windowHeight > 825)
    {
      this.UsHeight = Math.floor (numHeight * 0.13) + 'px';
      this.UltimateHeight = Math.floor (numHeight * 0.4) + 'px';
      this.CostHeight = Math.floor (numHeight * 0.13) + 'px';
      this.MinHeight = Math.floor (numHeight * 0.2) + 'px';
      this.MaxHeight = Math.floor (numHeight * 0.2) + 'px';
      this.BottomSecHeight = Math.floor (numHeight * 0.23) + 'px';
      this.TextAreaHeight = Math.floor (numHeight * 0.3) + 'px';
      this.CustomTab1 = false;
      this.CustomTab = true;
    }
    if (this.windowHeight < 876)
    {
      this.TextAreaHeight = Math.floor (numHeight * 0.2) + 'px';
    }
    if (this.windowHeight <= 825 && this.windowHeight > 750)
    {
      this.UsHeight = Math.floor (numHeight * 0.1) + 'px';
      this.UltimateHeight = Math.floor (numHeight * 0.32) + 'px';
      this.CostHeight = Math.floor (numHeight * 0.1) + 'px';
      this.MinHeight = Math.floor (numHeight * 0.15) + 'px';
      this.MaxHeight = Math.floor (numHeight * 0.15) + 'px';
      this.BottomSecHeight = Math.floor (numHeight * 0.18) + 'px';
      this.TextAreaHeight = Math.floor (numHeight * 0.1) + 'px';
      this.CustomTab1 = false;
      this.CustomTab = true;
    }
    
    // ENABLE DISABLE TAB LOGIC
    if (this.windowWidth < 1600)
    {
      this.CustomTab = false;
      this.CustomTab1 = true;
      if (this.windowWidth < 1600 && this.CustomTab1 == true)
      {
        this.CostHeight = Math.floor (kendoHeight * 0.12) + 'px';
        this.UsHeight = Math.floor (kendoHeight * 0.12) + 'px';
        this.UltimateHeight = Math.floor (kendoHeight * 0.32) + 'px';
        this.MinHeight = Math.floor (kendoHeight * 0.15) + 'px';
        this.MaxHeight = Math.floor (kendoHeight * 0.15) + 'px';
        this.BottomSecHeight = Math.floor (kendoHeight * 0.18) + 'px';
        this.TextAreaHeight = Math.floor (numHeight * 0.16) + 'px';
      }
      if (this.windowHeight < 804 && this.CustomTab1 == true )
      {
        this.CostHeight = Math.floor (kendoHeight * 0.1) + 'px';
        this.UsHeight = Math.floor (kendoHeight * 0.1) + 'px';
        this.UltimateHeight = Math.floor (kendoHeight * 0.23) + 'px';
        this.MinHeight = Math.floor (kendoHeight * 0.14) + 'px';
        this.MaxHeight = Math.floor (kendoHeight * 0.14) + 'px';
        this.BottomSecHeight = Math.floor (kendoHeight * 0.17) + 'px';
        this.TextAreaHeight = Math.floor (numHeight * 0.07) + 'px';
      }
      if (this.windowHeight < 750 && this.CustomTab1 == true)
      {
        this.TextAreaHeight = Math.floor (numHeight * 0.04) + 'px';
        this.PargraphFont = '14px';
      }
    }
    if (this.windowWidth > 1600)
    {
      this.CustomTab = true;
      this.CustomTab1 = false;
    }
  }
  
  // ON PROJECT TYPE SELECTION
  onProjectTypeSelection (val)
  {
  }
  
  // ON COMPLETED TASK SELECTION
  onCompletedTask (val)
  {
  }
}
