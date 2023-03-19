import {Component, OnInit, HostListener, Input} from '@angular/core';
import {MessageService} from '../../../shared/services/message.service';
import {ForbiddenWords} from '../../../shared/services/forbidden.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router'
import {UserService} from '../../../shared/services/user.service';
import {TopicService} from 'src/app/modules/shared/services/topic.service';

// ADDING HTML AND CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// COMPONENT CLASS NAME
export class HomeComponent implements OnInit
{
  @Input ('searchedTopic') searchedTopic;
  
  public homeForm: FormGroup;
  searchTopic: any;
  allTopics: any;
  message = "Loading....";
  forbidden_messages = {};
  forbidden_words: any;
  claimedhome: boolean = false;
  homeTopic: boolean = true;
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
  constructor
  (
    private formBuilder: FormBuilder,
    private Message: MessageService,
    private Forbidden: ForbiddenWords,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private topic: TopicService,
    private activatedRoute: ActivatedRoute
  )
  {
    this.onResize ();
  }
  
  // FUNCTION TRIGGERED WHEN COMPONENT IS LOADED
  ngOnInit ()
  {
    console.log (this.searchedTopic);
    console.log (this.activatedRoute.snapshot.paramMap.get ('id'))
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
    this.onSearchedTopic ();
  }
  
  // INPUT CHECK
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
  
  // ON SEARCHED TOPIC SELECT
  onSearchedTopic ()
  {
    console.log (this.searchedTopic)
    if (this.searchedTopic == ' ')
    {
      this.homeTopic = true;
       this.claimedhome = false;
    }
    else
    {
      if (this.searchedTopic.status == 'RSV' || this.searchedTopic.status == 'SUB' || this.searchedTopic.status == 'REV' || this.searchedTopic.status == 'APP' || this.searchedTopic.status == 'CLM' || this.searchedTopic.status == 'INP' || this.searchedTopic.status == 'FRB' || this.searchedTopic.status == 'UNK')
      {
        this.homeTopic = false;
        this.claimedhome = true
      }
      else if (this.searchedTopic.status == 'LIV' || this.searchedTopic.status == 'EXP' || this.searchedTopic.status == 'ABN' || this.searchedTopic.status == 'TOPICOPOLIS' || this.searchedTopic.status == 'TOPICOPOLISRESERVED')
      {
        console.log (this.searchedTopic.status)
        this.homeTopic = true;
        this.claimedhome = false;
      }
    }
  }
}
