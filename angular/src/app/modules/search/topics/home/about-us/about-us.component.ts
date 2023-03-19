import {Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {ForbiddenWords} from 'src/app/modules/shared/services/forbidden.service';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {UserService} from 'src/app/modules/shared/services/user.service';
import {MessageService} from 'src/app/modules/shared/services/message.service';

// HTML CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

// COMPONENT CLASS NAME
export class AboutUsComponent implements OnInit
{
  @Input ('searchedTopic') searchedTopic;
  public homeForm: FormGroup;
  topicopolisEditor = 'Welcome to My Topic!';
  topicopolisStatus = 'Hi, I am a Topicopolis editor.';
  tsvEditor = 'Welcome to Electric Bike!';
  tsvStatus = 'Hi this Topic is reserved by a Topicopolis Editor.';
  livEditor = 'Welcome to My Topic!';
  livStatus = 'Hi, I am a Topicopolis editor.';
  expEditor = 'Welcome to My Topic!';
  expStatus = 'Hi, this is my Topic and it is expired!';
  abnEditor = 'Welcome to My Topic!';
  abnStatus = 'Hi, this is my Topic and it is abandoned! This inner panel will change automatically.';
  message = "Loading....";
  forbidden_messages = {};
  forbidden_words: any;
  private show: boolean = false;

  // HOLDS SEARCHED TOPIC
  searchedTerm: string;
  
  // HOLDS HOME CONTENT
  homeContent: any;
  
  // GET FILE PATH
  path: string;
  
  // IMAGE HEIGHT
  imgHeight: string;
  
  // IMAGE DISPLAY
  showimg: boolean = true;
  showimg1: boolean = false;
  
  // TO HANDLE FONTSIZE
  headSize: string;
  checkTerm = function(control: FormControl)
  {
    let vm = this;
    return new Promise (resolve =>
    {
      if (vm.forbidden_words.indexOf (control.value) == -1)
      {
        resolve (null);
      }
      else
      {
        resolve ({'validterm': true});
      }
    });
  };
  
  // FUNCTION CALL WHEN RESIZE OF WINDOW HAPPENS
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    // CALLED UPDATE ITEM FUNCTION
    this.updateHeight ();
  }
  
  // CONSTRUCTOR FOR THIS CLASS
  constructor (private formBuilder: FormBuilder,
    private Message: MessageService,
    private Forbidden: ForbiddenWords,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService)
  {
    this.onResize ();
  }
  
  // FUNCTION TRIGGERED WHEN COMPONENT IS LOADED
  ngOnInit ()
  {
    console.log (this.searchedTopic);
    // GET THE HOME CONTENT BASED ON SEARCHED TOPIC
    this.route.params.subscribe ((params: Params) =>
    {
      this.searchedTerm = params['id'];
      this.userService.getHomeContent (this.searchedTerm).subscribe (data =>
      {
        this.homeContent = data;
        this.path = '../../../../assets/svg/hometab/' + this.homeContent.svgname;
      });
    });
  }
  
  // CHECK INPUT FUNCTION
  checkInput (event)
  {
    event.preventDefault ();
    
    // STOP HERE IF FORM IS INVALID
    if (this.homeForm.invalid)
    {
      return;
    }
    const target = event.target;
    const searchterm = target.querySelector ('#searchterm').value;
    this.show = !this.show;
    this.router.navigate ([searchterm], {relativeTo: this.route})
  }
  
  // FUNCTION TO HANDLE RESPONSIVES OF THE PAG
  updateHeight ()
  {
    // DECLARING VARIBALE FOR HEIGHT
    var windowHeight = window.innerHeight;
    
    //REDUCING  THE WIDTH OF THE SIDEBAR BASED ON SCREEN SIZE
    if (windowHeight > 600 && windowHeight <= 720)
    {
      // REDUCING THE IMAGE HEIGHT BASED ON SCREEN SIZE
      this.imgHeight = (windowHeight - 244) + 'px';
      this.showimg1 = true;
      this.showimg = false;
      this.headSize = '2rem';
    }
    else if (windowHeight <= 600)
    {
      this.imgHeight = (windowHeight - 170) + 'px';
      this.showimg1 = true;
      this.showimg = false;
      this.headSize = '2.5rem';
    }
    else
    {
      this.headSize = '2.5rem';
      this.showimg = true;
      this.showimg1 = false;
    }
  }
}
