import {ChangeDetectionStrategy, Component, HostListener, Input, OnChanges} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import WindowViewPort from '@progress/kendo-popup-common/dist/npm/window-viewport';

// HTML AND CSS FILES FOR THIS COMPONENT
@Component
({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomPaginationComponent implements OnChanges
{
  
  @Input ('data') tTopic: string[] = [];
  @Input ('selectedCategory') selectedCategory: string[] = [];
  @Input ('searchTopic') searchTopic: string;
  @Input ('currentPage') currentPage: number;
  @Input ('changePage') changePage: number = 0;
  @Input ('itemPerPage') itemPerPage: number;
  
  public lastPage: number;
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 50,
    currentPage: 1
  };
  headSize = '16px';
  fontSize = '14px';
  pageBarSize: string;
  itemHeight: string;
  previousHeight: number;
  // HOLDS THE HEIGHT OF TOPIC DIV
  topicDivHeight: number;
  
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
  
  // RESIZE SCREEN VALUE
  @HostListener ('window:resize')
  onResize ()
  {
    //CALLED UPDATE PAGE ITEM FUNCTION
    this.updatePageItem ();
  }
  
  constructor ()
  {
    this.onResize ();
  }
  
  // RESPONSIVE HANDLING FOR ITEMS SELECTED
  updatePageItem ()
  {
    // DECLARING VARIABLE FOR HEIGHT
    var windowHeight = window.innerHeight;
    
    // DECLARING VARIABLE FOR WIDTH
    var windowWidth = window.innerWidth;
    
    // REDUCING THE BACKGROUND HEIGHT OF ITEMS BASED ON SCREEN SIZE
    if (windowWidth > 1729 && windowHeight > 650)
    {
      this.itemHeight = (windowHeight - 492) + 'px';
    }
    else if (windowWidth <= 1729 && windowWidth > 1300 && windowHeight > 650)
    {
      this.itemHeight = (windowHeight - 494) + 'px';
    }
    else if (windowWidth <= 1300 && windowWidth > 1260 && windowHeight > 650)
    {
      this.itemHeight = (windowHeight - 484) + 'px';
    }
    else if (windowWidth <= 1260 && windowWidth > 1141 && windowHeight > 650)
    {
      this.itemHeight = (windowHeight - 478) + 'px';
    }
    else if (windowWidth <= 1141 && windowWidth > 1090 && windowHeight > 650)
    {
      this.itemHeight = (windowHeight - 484) + 'px';
    }
    else if (windowWidth <= 1090 && windowWidth > 960 && windowHeight > 650)
    {
      this.itemHeight = (windowHeight - 439) + 'px';
    }
    else if (windowWidth <= 960 && windowWidth > 767 && windowHeight > 650)
    {
      this.itemHeight = (windowHeight - 439) + 'px';
    }
    else if (windowWidth <= 767 && windowWidth >= 500 && windowHeight > 650)
    {
      this.itemHeight = (windowHeight - 496) + 'px';
    }
    if (windowWidth > 1729 && windowHeight <= 650)
    {
      this.itemHeight = (windowHeight - 483) + 'px';
    }
    else if (windowWidth <= 1729 && windowWidth > 1300 && windowHeight <= 650)
    {
      this.itemHeight = (windowHeight - 483) + 'px';
    }
    else if (windowWidth <= 1300 && windowWidth > 1260 && windowHeight <= 650)
    {
      this.itemHeight = (windowHeight - 477) + 'px';
    }
    else if (windowWidth <= 1260 && windowWidth > 1141 && windowHeight <= 650)
    {
      this.itemHeight = (windowHeight - 478) + 'px';
    }
    else if (windowWidth <= 1141 && windowWidth > 1090 && windowHeight <= 650)
    {
      this.itemHeight = (windowHeight - 485) + 'px';
    }
    else if (windowWidth <= 1090 && windowWidth > 960 && windowHeight <= 650)
    {
      this.itemHeight = (windowHeight - 437) + 'px';
    }
    else if (windowWidth <= 960 && windowWidth > 767 && windowHeight <= 650)
    {
      this.itemHeight = (windowHeight - 438) + 'px';
    }
    else if (windowWidth <= 767 && windowWidth >= 500 && windowHeight <= 650)
    {
      this.itemHeight = (windowHeight - 506) + 'px';
    }
    
    // CHANGING VALUES TO HANDLE RESPONSIVENESS BASED ON HEIGHT AND WIDTH
    if (windowWidth > 1920 && windowHeight <= 600)
    {
      this.config.itemsPerPage = 5;
    }
    else if (windowWidth <= 1920 && windowWidth > 1200 && windowHeight <= 600)
    {
      this.config.itemsPerPage = 5;
    }
    else if (windowWidth <= 1200 && windowWidth > 1090 && windowHeight <= 600)
    {
      this.config.itemsPerPage = 5;
    }
    else if (windowWidth <= 1090 && windowWidth > 992 && windowHeight <= 600)
    {
      this.config.itemsPerPage = 5;
    }
    else if (windowWidth <= 992 && windowWidth > 767 && windowHeight <= 600)
    {
      this.config.itemsPerPage = 5;
    }
    else if (windowWidth <= 1920 && windowWidth > 767 && windowHeight > 600 && windowHeight <= 650)
    {
      this.config.itemsPerPage = 5;
    }
    else if (windowWidth <= 1920 && windowWidth > 1200 && windowHeight > 650 && windowHeight <= 700)
    {
      this.config.itemsPerPage = 10;
    }
    else if (windowWidth <= 1200 && windowWidth > 1090 && windowHeight > 650 && windowHeight <= 700)
    {
      this.config.itemsPerPage = 5;
    }
    else if (windowWidth <= 1090 && windowWidth > 767 && windowHeight > 650 && windowHeight <= 700)
    {
      this.config.itemsPerPage = 10;
    }
    else if (windowWidth <= 1920 && windowWidth > 767 && windowHeight > 700 && windowHeight <= 750)
    {
      this.config.itemsPerPage = 15;
    }
    else if (windowWidth <= 1920 && windowWidth > 1200 && windowHeight > 750 && windowHeight <= 800)
    {
      this.config.itemsPerPage = 20;
    }
    else if (windowWidth <= 1200 && windowWidth > 992 && windowHeight > 750 && windowHeight <= 800)
    {
      this.config.itemsPerPage = 25;
    }
    else if (windowWidth <= 992 && windowWidth > 767 && windowHeight > 750 && windowHeight <= 800)
    {
      this.config.itemsPerPage = 20;
    }
    else if (windowWidth <= 1920 && windowWidth > 1200 && windowHeight > 800 && windowHeight <= 850)
    {
      this.config.itemsPerPage = 30;
    }
    else if (windowWidth <= 1200 && windowWidth > 1090 && windowHeight > 800 && windowHeight <= 850)
    {
      this.config.itemsPerPage = 25;
    }
    else if (windowWidth <= 1090 && windowWidth > 992 && windowHeight > 800 && windowHeight <= 850)
    {
      this.config.itemsPerPage = 35;
    }
    else if (windowWidth <= 992 && windowWidth > 767 && windowHeight > 800 && windowHeight <= 850)
    {
      this.config.itemsPerPage = 28;
    }
    else if (windowWidth <= 1920 && windowWidth > 1200 && windowHeight > 850 && windowHeight <= 900)
    {
      this.config.itemsPerPage = 38;
    }
    else if (windowWidth <= 1200 && windowWidth > 1090 && windowHeight > 850 && windowHeight <= 900)
    {
      this.config.itemsPerPage = 35;
    }
    else if (windowWidth <= 1090 && windowWidth > 992 && windowHeight > 850 && windowHeight <= 900)
    {
      this.config.itemsPerPage = 40;
    }
    else if (windowWidth <= 992 && windowWidth > 767 && windowHeight > 850 && windowHeight <= 900)
    {
      this.config.itemsPerPage = 30;
    }
    else if (windowWidth <= 1920 && windowWidth > 1200 && windowHeight > 900 && windowHeight <= 950)
    {
      this.config.itemsPerPage = 45;
    }
    else if (windowWidth <= 1200 && windowWidth > 1090 && windowHeight > 900 && windowHeight <= 950)
    {
      this.config.itemsPerPage = 40;
    }
    else if (windowWidth <= 1090 && windowWidth > 767 && windowHeight > 900 && windowHeight <= 950)
    {
      this.config.itemsPerPage = 36;
    }
    else if (windowWidth <= 1920 && windowWidth > 1200 && windowHeight > 950 && windowHeight <= 1000)
    {
      this.config.itemsPerPage = 50;
    }
    else if (windowWidth <= 1200 && windowWidth > 1090 && windowHeight > 950 && windowHeight <= 1000)
    {
      this.config.itemsPerPage = 45;
    }
    else if (windowWidth <= 1090 && windowWidth > 992 && windowHeight > 950 && windowHeight <= 1000)
    {
      this.config.itemsPerPage = 50;
    }
    else if (windowWidth <= 992 && windowWidth > 767 && windowHeight > 950 && windowHeight <= 1000)
    {
      this.config.itemsPerPage = 38;
    }
    else if (windowWidth <= 1920 && windowWidth > 767 && windowHeight > 1000 && windowHeight <= 1200)
    {
      this.config.itemsPerPage = 60;
    }
    
    // PAGINATION WIDTH FOR RESPONSIVE HANDLING
    if (windowWidth <= 1920 && windowWidth > 1820 && windowHeight > 600)
    {
      this.pageBarSize = '82.3%';
    }
    else if (windowWidth <= 1820 && windowWidth > 1750 && windowHeight > 600)
    {
      this.pageBarSize = '81.3%';
    }
    else if (windowWidth <= 1750 && windowWidth > 1700 && windowHeight > 600)
    {
      this.pageBarSize = '80.6%';
    }
    else if (windowWidth <= 1700 && windowWidth > 1650 && windowHeight > 600)
    {
      this.pageBarSize = '80%';
    }
    else if (windowWidth <= 1650 && windowWidth > 1600 && windowHeight > 600)
    {
      this.pageBarSize = '79.6%';
    }
    else if (windowWidth <= 1600 && windowWidth > 1550 && windowHeight > 600)
    {
      this.pageBarSize = '79%';
    }
    else if (windowWidth <= 1550 && windowWidth > 1500 && windowHeight > 600)
    {
      this.pageBarSize = '78.4%';
    }
    else if (windowWidth <= 1500 && windowWidth > 1450 && windowHeight > 600)
    {
      this.pageBarSize = '77.6%';
    }
    else if (windowWidth <= 1450 && windowWidth > 1400 && windowHeight > 600)
    {
      this.pageBarSize = '76.6%';
    }
    else if (windowWidth <= 1400 && windowWidth > 1350 && windowHeight > 600)
    {
      this.pageBarSize = '76%';
    }
    else if (windowWidth <= 1350 && windowWidth > 1300 && windowHeight > 600)
    {
      this.pageBarSize = '75%';
    }
    else if (windowWidth <= 1300 && windowWidth > 1250 && windowHeight > 600)
    {
      this.pageBarSize = '74%';
    }
    else if (windowWidth <= 1250 && windowWidth > 1200 && windowHeight > 600)
    {
      this.pageBarSize = '73%';
    }
    else if (windowWidth <= 1200 && windowWidth > 1150 && windowHeight > 600)
    {
      this.pageBarSize = '72%';
    }
    else if (windowWidth <= 1150 && windowWidth > 1100 && windowHeight > 600)
    {
      this.pageBarSize = '70.6%';
    }
    else if (windowWidth <= 1100 && windowWidth > 1050 && windowHeight > 600)
    {
      this.pageBarSize = '69.2%';
    }
    else if (windowWidth <= 1050 && windowWidth > 1000 && windowHeight > 600)
    {
      this.pageBarSize = '69%';
    }
    else if (windowWidth <= 1000 && windowWidth > 950 && windowHeight > 600)
    {
      this.pageBarSize = '66%';
    }
    else if (windowWidth <= 950 && windowWidth > 935 && windowHeight > 600)
    {
      this.pageBarSize = '64.4%';
    }
    else if (windowWidth <= 935 && windowWidth > 895 && windowHeight > 600)
    {
      this.pageBarSize = '63.8%';
    }
    else if (windowWidth <= 895 && windowWidth > 850 && windowHeight > 600)
    {
      this.pageBarSize = '61.8%';
    }
    else if (windowWidth <= 850 && windowWidth > 835 && windowHeight > 600)
    {
      this.pageBarSize = '67.3%';
    }
    else if (windowWidth <= 835 && windowWidth > 767 && windowHeight > 600)
    {
      this.pageBarSize = '65.3%';
    }
    else if (windowWidth <= 1920 && windowWidth > 1650 && windowHeight <= 600)
    {
      this.pageBarSize = '97%';
    }
    else if (windowWidth <= 1650 && windowWidth > 1350 && windowHeight <= 600)
    {
      this.pageBarSize = '96.6%';
    }
    else if (windowWidth <= 1350 && windowWidth > 1000 && windowHeight <= 600)
    {
      this.pageBarSize = '95.6%';
    }
    else if (windowWidth <= 1000 && windowWidth > 950 && windowHeight <= 600)
    {
      this.pageBarSize = '94%';
    }
    else if (windowWidth <= 950 && windowWidth > 767 && windowHeight <= 600)
    {
      this.pageBarSize = '94%';
    }
    else if (windowWidth <= 767)
    {
      this.pageBarSize = '97.5%';
    }
  }
  
  ngOnChanges ()
  {
    // SET ITEM PER PAGE
    if (this.itemPerPage)
    {
      this.config.itemsPerPage = this.itemPerPage;
    }
    
    // SET FIXED PAGE IN FILTER
    if (this.currentPage)
    {
      this.config.currentPage = this.currentPage;
    }
  }
  
  // GO TO PREVIOUS PAGE
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
    if (this.changePage && this.tTopic && this.tTopic.length)
    {
      this.lastPage = Math.ceil (this.tTopic.length / this.config.itemsPerPage);
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
