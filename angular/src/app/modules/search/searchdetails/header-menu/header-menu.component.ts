import { Component, EventEmitter, Input, Output, HostListener, OnInit, OnChanges } from '@angular/core';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from '../../../shared/services/topic.service';
import { PaginationInstance } from 'ngx-pagination';

// HTML CSS FOR THIS COMPONENT
@Component
  ({
    selector: 'app-header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.css']
  })

// CLASSNAME FOR THIS COMPONENT
export class HeaderMenuComponent implements OnInit, OnChanges {
  pagination: boolean = true;
  perticularTopic: any;
  allTopics: any;
  p: number = 1;
  changePage: number = 0;
  fontSize: number;
  public lastPage: number;
  responsiveContent = [];

  // HOLD SELECTED TAB
  public selected: number = 0;

  // PAGINATION CONFIG OBJECT
  public configure: PaginationInstance =
    {
      id: 'custom1',
      itemsPerPage: 11,
      currentPage: 1
    };

  // GET TAB LIST AS PER SEARCHED TOPIC
  @Input('tabList') tabList = [];

  @Input('isTopicClaimed') isTopicClaimed;
  @Input('searchedTopic') searchedTopic;

  // RETURN SELECTED TAB VALUE TO PARENT COMPONENT
  @Output() loadComponent = new EventEmitter();

  // HOLD PARENT AND CHILD TAB VALUE
  parentTab = [];
  childTab = [];

  // HOLD SELECTED TAB VALUE
  selectedTabs = '';
  searchValue = '';

  // FUNCTION CALLED WHEN ANY DATA CHNAGE
  ngOnChanges(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    console.log(this.searchedTopic)
    this.getTopicTab();
    if (this.isTopicClaimed) {
      this.selectedTabs = 'home';
    }
    else {
      this.selectedTabs = 'claim this topic';
    }
  }

  // GET THE WIDTH OF SCREEN
  @HostListener('window:resize', ['$event'])
  onResize() {
    // CALLED UPDATE ITEM FUNCTION
    this.updateHeaderMenu();
    this.onPagination();
  }

  // CONSTRUCTOR FOR THIS CLASS
  constructor(private route: ActivatedRoute, private topicService: TopicService) {
    this.getTopicTab();
  }

  // FUNCTION TRIGGERED WHEN COMPONENT IS LOADED
  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.onResize();
  }

  // ON MOBILE MENU CLICK
  onMobileMenuClick() {
    $('#sidebar').toggleClass('active');
  }

  // ACTION AFTER TAB SELECTED ON CLICK
  selectedTab(tab) {
    console.log(tab)
    this.selectedTabs = tab.tabname;
    console.log(this.selectedTabs)
    this.childTab = _.filter(this.tabList, { 'tabparent_id': tab.tabtype_id });
    this.loadComponent.emit
      ({
        'selectedTab': tab,
        'childTab': this.childTab
      });
  }

  // GET THE TAB ON MOBILE VIEW
  getTopicTab() {
    // console.log(this.searchedTopic.status)
    this.route.params.subscribe(params => {
      this.topicService.getTopicTabs({ 'searchterm': params.id }).subscribe((result: any) => {
        if (result && result.length === 0 && (this.searchedTopic.status == 'TOP' || this.searchedTopic.status == 'RSV' || this.searchedTopic.status == 'SUB' || this.searchedTopic.status == 'REV' || this.searchedTopic.status == 'APP' || this.searchedTopic.status == 'CLM' || this.searchedTopic.status == 'INP')) {
          // IF SEARCH TOPIC IS TOPICOPOLIS PAGE THEN PUSH TOPICOPOLIS TABS
          result = this.topicService.getTOPTopicsTab();
        }
        else if (result && result.length === 0 && this.searchedTopic.status == 'TSV') {
          // IF SEARCH TOPIC IS TOPICOPOLIS RESERVED THEN PUSH RESERVED TABS
          result = this.topicService.getTSVTopicTab();
        }
        else if (result && result.length === 0 && this.searchedTopic.status == 'DRP') {
          // IF SEARCH TOPIC IS DROPPED THEN PUSH DROPPED TABS
          result = this.topicService.getDroppedTopicTab();
        }
        else if (result && result.length === 0 && this.searchedTopic.status == 'LIV') {
          // IF SEARCH TOPIC IS LIVE THEN PUSH LIVE TABS
          result = this.topicService.getLIVTopicsTab();
        }
        else if (result && result.length === 0 && (this.searchedTopic.status == 'EXP' || this.searchedTopic.status == 'ABN')) {
          // IF SEARCH TOPIC IS EXPIRED THEN PUSH EXPIRED TABS
          result = this.topicService.getEXPTopicsTab();
        }
        else if (result && result.length === 0 && (this.searchedTopic.status == 'REJ' || this.searchedTopic.status == 'UNK' || this.searchedTopic.status == 'UNC')) {
          // IF SEARCH TOPIC IS REJECTED THEN PUSH REJECTED TABS
          result = this.topicService.getUnclaimedTopicTab();
        }
        else if (result && result.length === 0 && this.searchedTopic.status == 'FRB') {
          // IF SEARCH TOPIC IS FORBIDDEN THEN PUSH FORBIDDEN TABS
          result = this.topicService.getForbiddenTopicTab();
        }
        else if (result && result.length === 0 && this.searchedTopic.status == 'FRB') {
          // IF SEARCH TOPIC IS FORBIDDEN THEN PUSH FORBIDDEN TABS
          result = this.topicService.getForbiddenTopicTab();
        }
        else {
          result.unshift(this.topicService.getUnclaimedTopicTab());
        }
        this.parentTab = result.filter(tab => tab.tabparent_id === null);
        this.responsiveContent = this.parentTab;
        if (this.isTopicClaimed) {
          this.selectedTabs = 'home';
        }
        else {
          this.selectedTabs = 'claim this topic';
        }
      });
    });
  }

  //PAGINATION PAGES ACCORDING TO WINDOW WIDTH
  updateHeaderMenu() {
    var windowWidth = window.innerWidth;
    if (windowWidth >= 1700) {
      this.configure.itemsPerPage = 11;
    }
    else if (windowWidth >= 1600 && windowWidth < 1700) {
      this.configure.itemsPerPage = 11;
    }
    else if (windowWidth >= 1570 && windowWidth < 1600) {
      this.configure.itemsPerPage = 9;
    }
    else if (windowWidth >= 1490 && windowWidth < 1560) {
      this.configure.itemsPerPage = 8;
    }
    else if (windowWidth >= 1400 && windowWidth < 1480) {
      this.configure.itemsPerPage = 7;
    }
    else if (windowWidth >= 1300 && windowWidth < 1400) {
      this.configure.itemsPerPage = 6;
    }
    else if (windowWidth >= 1250 && windowWidth < 1300) {
      this.configure.itemsPerPage = 5;
    }
    else if (windowWidth >= 1180 && windowWidth < 1250) {
      this.configure.itemsPerPage = 4;
    }
    else if (windowWidth >= 965 && windowWidth < 1180) {
      this.configure.itemsPerPage = 3;
    }
    else if (windowWidth >= 920 && windowWidth < 965) {
      this.configure.itemsPerPage = 2;
    }
    else if (windowWidth >= 768 && windowWidth < 910) {
      this.configure.itemsPerPage = 1;
    }
  }

  // HIDE PAGINATION IN MOBILE SCREEN
  onPagination() {
    var windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      this.pagination = false;
    }
    else {
      this.pagination = true;
    }
  }
}
