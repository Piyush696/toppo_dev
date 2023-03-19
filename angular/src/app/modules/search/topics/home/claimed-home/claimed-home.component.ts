import {Component, OnInit, HostListener, Input} from '@angular/core';

// ADDING HTML AND CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-claimed-home',
  templateUrl: './claimed-home.component.html',
  styleUrls: ['./claimed-home.component.css']
})

// COMPONENT CLASS NAME
export class ClaimedHomeComponent implements OnInit
{
  @Input ('searchedTopic') searchedTopic;
  
  //HARDCODED DATA OF DIFFERENT TOPICS.
  topic = 'We are Sorry-This topic is reserved';
  subHeading = 'Topic is Reserved';
  topicStatus = 'This Topic is currently being reserved.';
  submitted = 'We are Sorry-This topic is submitted'
  submittedTitle = 'Topic is in submitted state.'
  submittedStatus = 'This Topic is currently in submitted state.';
  review = 'We are Sorry-TheElectricBike'
  reviewTitle = 'Topic is in review state.'
  reviewStatus = 'This Topic is currently in review state.';
  approved = 'Comming Soon!'
  approvedTitle = 'This Topic is under development.'
  approvedStatus = 'This Topic is currently in approved state.';
  claimed = 'Comming Soon!'
  claimedTitle = 'This Topic is under development.'
  claimedStatus = 'This Topic is currently in claimed state.';
  inProgressTopic = 'This Topic is in Progress'
  inProgressTopicTitle = 'This Topic is under development.'
  inProgressTopicStatus = 'This Topic is currently in InProgress state.';
  forbidden = 'Warning:This Topic is'
  forbiddenTitle = 'Forbidden!.'
  forbiddenStatus = 'We will never create this Topic !Never Never, never, never, never!If you want to read about this Topic, try Google, Reddit, or 4 Chan . . . not us. Bye!';
  unKnown = 'Not sure what to do!'
  unKnownTitle = 'UNKNOWN!.'
  unKnownStatus = 'We arent sure what to do with this Topic yet, so we will route to this page until we decide. One example Topic in this category would be Sex. A message that would be something like .This topic is currently under review.';
  tabHeight: any;
  
  // FUNCTION EXECUTED WHEN PAGE RESIZE
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    // CALLED UPDATE ITEM FUNCTION
    this.updatePageItem ();
  }
  
  // CONSTRUCTOR FOR THIS CLASS
  constructor ()
  {
  }
  
  // FUNCTION CALL WHEN RESIZE OF WINDOW HAPPENS
  ngOnInit ()
  {
    console.log (this.searchedTopic);
    this.updatePageItem ();
  }
  
  // RESPONSIVE HANDLING FOR TAB HEIGHT
  updatePageItem ()
  {
    // DECLARING VARIABLE FOR HEIGHT
    let windowHeight = window.innerHeight;
    this.tabHeight = (windowHeight - 230) + 'px';
  }
}
