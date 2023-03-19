import {Component, HostListener, Input, OnInit, AfterViewInit} from '@angular/core';
import {TopicService} from 'src/app/modules/shared/services/topic.service';
import {ClaimedService} from 'src/app/modules/shared/services/claimed.service';
import {ResponsiveService} from "../../../shared/services/responsive.service"
import {PaginationInstance} from 'ngx-pagination';
import {fromEvent} from "rxjs/observable/fromEvent";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
declare var $: any;
declare var detectZoom: any;

// ADDING HTML AND CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-guidestopic',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})

// COMPONENT CLASS
export class GuidestopicComponent implements OnInit, AfterViewInit
{
  // COMPONENT VARIABLES
  link = '"Electric bikes redirect here, For electrically powered motorbikes"';
  responsiveContent = [];
  fullboxHeight = (window.innerHeight - 185);
  guideHeight = (window.innerHeight - 185) + 'px';
  BikesData: any;
  p: number = 1;
  changePage: number = 0;
  fontSize: number;
  public lastPage: number;
  
  // HOLD CHILD TAB SEND BY PARENT COMPONENT
  public childTab = [];
  
  // HOLD SELECTED TAB
  public selected: number = 0;
  
  // PAGINATION CONFIG OBJECT
  public config: PaginationInstance =
  {
    id: 'custom',
    itemsPerPage: 1,
    currentPage: 1
  };
  containerParentHeight: number;
  headSize = '16px';
  pageBarSize: string;
  itemHeight: string;
  previousHeight: number;
  
  // HOLDS THE HEIGHT OF TOPIC DIV
  topicDivHeight: number;
  paginationWidth: number;
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  
  // CONSTRUCTOR FOR THIS COMPONENT
  constructor (private topicService: TopicService, private claimedService: ClaimedService, public responsiveService: ResponsiveService)
  {
  }  

  // FUNCTION THAT IS CALLED WHEN THIS COMPONENT INITIALIZES
  ngOnInit ()
  {
    // this.childTab = [ 'Site Overview', 'Topic Overview'];
    this.paginationWidth = document.getElementById ("full-box").offsetWidth;
    this.resizeObservable$ = fromEvent (window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe (evt =>
    {
      console.log ('event: ', evt)
      var newHeight = (window.innerHeight - 185);
      this.guideHeight = newHeight + 'px';
      
      // DEBUG LOGS
      console.log ("In Event init");
      console.log ("newheight: " + this.guideHeight);
    })
    
    // JSON DEMO DATA FOR CLAIMED COMPONENT.
    this.claimedService.getBikes ().subscribe ((res: any) =>
    {
      this.BikesData = res;

      // SET THE HEIGHT OF THE CONTAINER
      var newHeight = (window.innerHeight - 185);
      this.guideHeight = newHeight + 'px';
      
      // DEBUG LOGS
      console.log ("on init");
      console.log ("newheight: " + this.guideHeight);
      
      // SET THE FONT SIZE FOR THE CONTAINER BEFORE CALLING THE RESPONSIVE SERVICE
      var fontSize = this.responsiveService.getGlobalFont() + "px";
      $("#guide-tab").css("font-size", fontSize);

      // CALL THE RESPONSIVE SERVICE TO PAGINATE THE CONTENT.
      var containerParentHeight = (newHeight * detectZoom.zoom () - (166 * detectZoom.zoom ()));
      let obj = this.responsiveService.calculateResponsiveness (document.getElementById ("guide-tab").offsetWidth, containerParentHeight, this.BikesData.Description);
      this.responsiveContent = obj['content'];
    })
  }
  
  // FUNCTION CALLED WHEN COMPONENT IS REMOVED FROM THE APP
  ngOnDestroy ()
  {
    this.resizeSubscription$.unsubscribe ()
  }
  
  // ACTIONS AFTER LOADING HTML AND CSS
  ngAfterViewInit (): void
  {
    // SET THE WIDTH OF THE PAGINATION CONTAINER
    this.paginationWidth = document.getElementById ("full-box").offsetWidth;

    // SET THE HEIGHT OF THE CONTAINER
    var newHeight = (window.innerHeight - 185);
    this.guideHeight = newHeight + 'px';
    
    // DEBUG LOGS
    console.log ("after view init");
    console.log ("newheight: " + this.guideHeight);
  }
  
  // FUNCTION CALLED ON EVERY RESIZE
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    // CALLED UPDATE ITEM FUNCTION
    var newHeight = (window.innerHeight - 185);
    this.guideHeight = newHeight + 'px';
    this.paginationWidth = document.getElementById ("full-box").offsetWidth;
    console.log ("on resize");
    console.log ("newheight: " + this.guideHeight);
    
    // SET THE FONT SIZE FOR THE CONTAINER BEFORE CALLING THE RESPONSIVE SERVICE
    var fontSize = this.responsiveService.getGlobalFont() + "px";
    $("#guide-tab").css("font-size", fontSize);

    // NOW THAT THE WINDOW WAS RESIZED, WE HAVE TO CALCULATE THE NUMBER OF PAGES TO DISPLAY AGAIN.
    var containerParentHeight = (newHeight * detectZoom.zoom () - (166 * detectZoom.zoom ()));
    let obj = this.responsiveService.calculateResponsiveness (document.getElementById ("guide-tab").offsetWidth, containerParentHeight, this.BikesData.Description);
    this.responsiveContent = obj['content'];
  }
  
  // GET RIGHT/LEFT ARROW KEY & PAGE UP/DOWN KEY EVENT.
  @HostListener ('window: keyup', ['$event'])
  handleKeyboardEvent (event: any)
  {
    if (event.key === 'ArrowRight')
    {
      this.onDownOrRight ();
    }
    else if (event.key === 'ArrowLeft')
    {
      this.onUpOrLeft ();
    }
    else if (event.key === 'PageUp')
    {
      this.onUpOrLeft ();
    }
    else if (event.key === 'PageDown')
    {
      this.onDownOrRight ();
    }
  }
  
  // GET MOUSE UP AND DOWN MOUSE WHEEL EVENT.
  @HostListener ('mousewheel', ['$event'])
  handleMouseEvent (event: any)
  {
    if (event && event.wheelDelta < 0)
    {
      // WHEEL DOWN
      this.onDownOrRight ();
    }
    else
    {
      // WHEEL UP
      this.onUpOrLeft ();
    }
  }
  
  onUpOrLeft ()
  {
    // ON UP AND LEFT KEY PRESS EVENT CHANGE PAGE VALUE IS NEGATIVE.
    // IF CURRENT PAGE VALUE IS POSITIVE THEN SET IT NEGATIVE ELSE DECREASE IT.
    if (this.changePage >= 0)
    {
      this.changePage = -1;
    }
    else if (this.changePage < 0)
    {
      this.changePage = this.changePage - 1;
    }
    this.updatePage ();
  }
  
  // GO TO NEXT PAGE
  onDownOrRight ()
  {
    // ON DOWN AND RIGHT KEY PRESS EVENT CHANGE PAGE VALUE IS POSITIVE.
    // IF CURRENT PAGE VALUE IS NEGATIVE THEN SET IT POSITIVE ELSE INCREASE IT.
    if (this.changePage <= 0)
    {
      this.changePage = 1;
    }
    else if (this.changePage > 0)
    {
      this.changePage = this.changePage + 1;
    }
    this.updatePage ();
  }
  
  // UPDATE THE PAGE ACCORDING TO PAGE NUMBER
  updatePage ()
  {
    // CHANGE PAGE ON EVENTS
    if (this.changePage && this.responsiveContent && this.responsiveContent.length)
    {
      this.lastPage = Math.ceil (this.responsiveContent.length / this.config.itemsPerPage);
      if (this.config.currentPage !== this.lastPage && this.changePage > 0)
      {
        this.config.currentPage = this.config.currentPage + 1;
      }
      else if (this.config.currentPage !== 1 && this.changePage < 0)
      {
        this.config.currentPage = this.config.currentPage - 1;
      }
    }
  }
}
