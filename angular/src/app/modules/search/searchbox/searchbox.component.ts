import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ForbiddenWords } from '../../shared/services/forbidden.service';
import { MessageService } from '../../shared/services/message.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TopicService } from '../../shared/services/topic.service';

// ADDING HTML CSS FOR THIS COMPONENT
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})

// COMPONENT CLASS NAME
export class SearchboxComponent implements OnInit {
  message = "Loading....";
  error_messages = {};
  forbidden_words: any;
  private show: boolean = false;
  searchForm: FormGroup;
  controls: any;

  // USED TO PRESERVE SEARCHED VALUE TO DISPLAY IN MAIN HEADER MENU
  @Input('searchedTerm') searchedTerm = '';
  searchValue: string;

  // RETURN THE TAB OF SEARCHED TOPIC
  @Output() searchedTabs = new EventEmitter();

  // FUNCTION TO RESTRICT THE USER FROM USING FORBIDDEN WORDS
  // THIS IS A VALIDATOR AND WILL THROW FORM INVALID ERROR WHEN FORBIDDEN WORDS ARE SEARCHED
  checkTerm = function (control: FormControl) {
    let vm = this;
    return new Promise(resolve => {
      if (vm.forbidden_words) {
        if (vm.forbidden_words.indexOf(control.value) == -1) {
          resolve(null);
        }
        else {
          resolve({ 'validterm': true });
        }
      }

    });
  };

  // CONSTRUCTOR FOR THIS COMPONENT
  constructor
    (
      private formBuilder: FormBuilder,
      private Message: MessageService,
      private topicService: TopicService,
      private Forbidden: ForbiddenWords,
      private router: Router,
      private route: ActivatedRoute
    ) {
    this.route.params.subscribe(params => {
      this.searchValue = params.id;
      console.log(this.searchValue)
    });
  }

  // INITIALIZING COMPONENT DURING LOADING
  async ngOnInit() {
    this.searchForm = this.formBuilder.group
      ({
        searchterm: [
          this.searchValue,
          [Validators.required],
          this.checkTerm.bind(this)
        ]
      });
    this.forbidden_words = await this.Forbidden.getForbiddenWords();
    this.error_messages = await this.Message.getMessages();

    if (this.searchValue && this.searchValue.length > 0) {
      this.getTopicTabs(this.searchValue);
    }
  }

  // RETURN FORM CONTROL
  get f() {
    return this.searchForm.controls;
  }

  // CHECKING SEARCH INPUT
  checkInput(event) {
    event.preventDefault();

    // STOP HERE IF FORM IS INVALID
    if (this.searchForm.invalid) {
      return;
    }
    const target = event.target;
    const searchterm = target.querySelector('#searchterm').value;
    this.getTopicTabs(searchterm);
    this.show = !this.show;
    this.router.navigate(['/' + searchterm], { relativeTo: this.route });
  }

  // SET THE HEADER ITEM
  getTopicTabs(searchValue) {
    console.log(this.searchValue)
    this.topicService.getTopicTabs({ 'searchterm': searchValue }).subscribe((result: any) => {
      console.log(result)
      if (result && result.length === 0) {
        // IF SEARCH TOPIC IS UNCLAIMED THEN PUSH DEFAULT TAB
        result = this.topicService.getUnclaimedTopicTab();
      }
      else {
        // SET HOME TAB IN CLAIMED TOPIC
        result.unshift(this.topicService.getUnclaimedTopicTab()[0]);
      }
      // EMIT DATE TO PARENT COMPONENT
      this.searchedTabs.emit(result);
    });
  }
}
