import {Component, OnInit, HostListener, AfterViewChecked, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TopicService} from '../../shared/services/topic.service';
import {MessageService} from '../../shared/services/message.service';

// HTML CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-searchdetails',
  templateUrl: './searchdetails.component.html',
  styleUrls: ['./searchdetails.component.css']
})

export class SearchdetailsComponent implements OnInit, AfterViewChecked
{
  @Output () topicEvent = new EventEmitter<string> ();
  searchedTopic: any;
  isTopicClaimed: boolean = true;
  isTopicAvailable: boolean;
  allTopics: any;
  
  // USED TO PRESERVE SEARCHED VALUE TO DISPLAY IN MAIN HEADER MENU
  searchedTerm = '';
  error_messages = {};
  
  // USED TO HIDE SHOW RESPECTIVE COMPONENTS
  // BY DEFAULT HOME COMPONENT IS LOADED
  loadComponent = 'home';
  
  //TOPIC STATUS AND PANEL MESSAGE
  topicStatus = 'UNC';
  topicOwner = 'Will This Be You?';
  topicOwnerRole = 'Editor';
  topicPanelMessage = 'The profile of the Editor and/or Partner will go here, and if you claim this topic, your name will go here as well. Check out the<i> Claim This Topic</i> link above!';
  
  // SET TRUE IN MOBILE SCREEN
  screenWidth = 0;
  isShow = false;
  sidebarHeight: number = 0;
  
  // HOLDS ALL TAB LIST
  tabList = [];
  
  // CHILD TAB LIST
  childTab = [];
  marginleft = '280px';
  
  // GET THE WIDTH OF SCREEN
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    //CALLED UPDATE PAGE FUNCTION
    this.updatePage ();
    
    // CALCULATE THE TOTAL HEIGHT OF SIDEBAR.
    if (document.getElementById ('sidebar-item1') && document.getElementById ('sidebar-item2') && document.getElementById ('sidebar-item3'))
    {
      this.sidebarHeight = document.getElementById ('sidebar-item1').offsetHeight +
        document.getElementById ('sidebar-item2').offsetHeight +
        document.getElementById ('sidebar-item3').offsetHeight +
        document.getElementById ('full-header').offsetHeight;
      localStorage.setItem ('sidebarHeight', JSON.stringify (this.sidebarHeight));
    }
    this.screenWidth = window.innerWidth;
  }
  
  // CONSTRUCTOR FOR THIS CLASS
  constructor (private activatedRoute: ActivatedRoute, private message: MessageService, private topic: TopicService, private router: Router)
  {
    this.onResize ();
  }
  
  // FUNCTION TRIGGERED WHEN HTML AND CSS IS LOADED
  ngAfterViewChecked ()
  {
    this.onResize ();
  }
  
  // FUNCTION TRIGGERED WHEN COMPONENT IS LOADED
  async ngOnInit ()
  {
    this.updatePage ();
    this.error_messages = await this.message.getMessages ();
    
    // SUBSCRIBE TO ROUTER EVENT TO GET VALUE OF PARAM - ID
    this.activatedRoute.params.subscribe ((params: Params) =>
    {
      this.searchedTerm = params['id'];
    });
    
    this.topic.findTopic ({'searchterm': this.searchedTerm}).subscribe (data =>
    {
      console.log (data);
      if (data.found)
      {
        this.topicStatus = data.topicstatus_id;
        if (this.topicStatus == 'TSV')
        {
          this.topicOwner = 'Topicopolis';
          this.topicOwnerRole = 'Administrator';
        }
      }
      else
      {
        this.topicStatus = data.topicstatus_id;
        this.topicOwner = this.error_messages['MSG-TOPICPANEL-SEARCHSTRING-OWNER'];
        this.topicOwnerRole = 'Editor';
        this.topicPanelMessage = this.error_messages['MSG-TOPICPANEL-SEARCHSTRING-MESSAGE'];
      }
    },
    error =>
    {
      console.log ("error");
    });
    this.getTopicDetails ();
  }
  
  // RESPONSIVE HANDLING FOR MARGIN IN UI
  updatePage ()
  {
    // DECLARING VARIBALE FOR HEIGHT
    var windowHeight = window.innerHeight;
    
    // DECLARING VARIBALE FOR WIDTH
    var windowWidth = window.innerWidth;
    
    // CHANGING VALUES AND UI TO HANDLE RESPONSIVENESS BASED ON HEIGHT AND WIDTH
    if (windowWidth > 1920 && windowHeight < 600)
    {
      this.marginleft = '0px';
    }
    else if (windowHeight <= 600)
    {
      this.marginleft = '0px';
    }
    else if (windowWidth <= 767)
    {
      this.marginleft = '0px';
    }
    else if (windowWidth <= 850)
    {
      this.marginleft = '220px';
    }
    else if (windowWidth <= 1920 && windowWidth > 767 && windowHeight > 600 && windowHeight <= 1080)
    {
      this.marginleft = '280px';
    }
  }
  
  // SHOW THE SEARCH BOX WHEN CLICK ON BUTTON IN MOBILE VIEW ONLY
  openSearchBox ()
  {
    if (this.screenWidth > 767)
    {
      return;
    }
    this.isShow = !this.isShow;
  }
  
  // GET ALL TAB FROM CHILD COMPONENT
  getTabs (tabs)
  {
    console.log (tabs)
    this.loadComponent = '';
    this.getTopicDetails ();
    this.tabList = tabs;
  }
  
  // GET SELECTED TAB FROM CHILD COMPONENT
  getSelectedTab (tab)
  {
    console.log (tab)
    this.loadComponent = tab.selectedTab.tabname;
    this.childTab = tab.childTab;
  }
  
  // DEMO JSON DATA FOR TOPICS
  getTopicDetails ()
  {
    this.topic.getDemoTopics ().subscribe (
      (res: any) =>
      {
        this.allTopics = res;
        this.searchedTopic = this.allTopics.find (x => x.topics == this.activatedRoute.snapshot.paramMap.get ('id'))
        console.log (this.searchedTopic)
        
        // IF SEARCH TOPIC IS UNDEFINED
        if (this.searchedTopic == undefined)
        {
          this.loadComponent = 'home';
          this.isTopicClaimed = true;
          this.isTopicAvailable = true;
          this.searchedTopic = {
            topic: this.activatedRoute.snapshot.paramMap.get ('id'),
            status: 'UNK'
          };
        }
        else
        {
          this.isTopicAvailable = true;
          
          //IF SEARCH TOPIC IS UNCLAIMED
          if (this.searchedTopic.status == 'UNC')
          {
            this.loadComponent = 'claim this topic';
            this.isTopicClaimed = false;
          }
          else
          {
            this.loadComponent = 'home';
            this.isTopicClaimed = true;
          }
        }
      }
    )
  }
}