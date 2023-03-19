import {Component, OnInit, HostListener} from '@angular/core';
import {TopicService} from '../../../shared/services/topic.service';
import {MessageService} from '../../../shared/services/message.service';
import {FormControl, FormGroup} from '@angular/forms';
import * as _ from 'lodash';

// HTML CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-reservedtopics',
  templateUrl: './reservedtopics.component.html',
  styleUrls: ['./reservedtopics.component.css']
})

// CLASS NAME OF THIS COMPONENT
export class ReservedtopicsComponent implements OnInit
{
  
  // HOLDS SEARCH STRING
  searchTopic: string;
  
  // HOLDS CURRENT PAGE AND ITEM PER PAGE ACCORDING TO SEARCH
  currentPage: number;
  changePage: number = 0;
  itemPerPage: number = 0;
  
  // HOLDS ALL THE CATEGORIES
  categories: Array<any> = [];
  
  // PAGINATION - PAGE NUMBER
  p: number = 1;
  
  // HOLDS TOPICS
  tTopic: any = [];
  
  // HOLDS SELECTED CATEGORY
  selectedCategory = [];
  highlightCategory = [];
  
  // HOLDS ALL MESSAGE
  messages_list: {};
  display_note_message: '';
  topic_not_found: '';
  
  // FORM CONTROL OBJECT
  searchTopicForm = new FormGroup ({
    searchterm: new FormControl (),
  });
  
  // HOLD TRUE IF SEARCH TOPIC NOT FOUND
  notTopicFound: boolean = false;
  
  Allheight: boolean = true;
  Customheight1: boolean = false;
  Customheight2: boolean = false;
  Customheight3: boolean = false;
  
  // GET THE WIDTH OF SCREEN
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    // CALLED UPDATE ITEM FUNCTION
    this.updatePageItem ();
    
    //CALLED UPDATE PAGE WIDTH FUNCTION
    this.updatePagewidth ();
  }
  
  headSize = '16px';
  
  // CONSTRUCTOR OF THIS COMPONENT
  constructor (private topicService: TopicService, private message: MessageService)
  {
    this.onResize ();
  }
  
  // LIFECYCLE HOOK WHEN COMPONENT INITIALIZED
  async ngOnInit ()
  {
    this.topicService.getTopicCategories ().subscribe (result =>
    {
      this.categories = result.filter (obj => obj.val !== '');
      console.log (this.categories)
    });
    
    // GETTING ALL MESSAGES
    this.messages_list = await this.message.getMessages ();
    this.display_note_message = this.messages_list['MSG-RESERVED-TOPICS-NOTES'];
    this.topic_not_found = this.messages_list['MSG-RESERVED-TOPIC-NOT-EXIST'];
  }
  
  get f ()
  {
    return this.searchTopicForm.controls;
  }
  
    // RESPONSIVE HANDLING FOR ITEMS 
    updatePagewidth()
    {
      // DECLARING VARIBALE FOR HEIGHT 
      var windowHeight = window.innerHeight;
  
      // DECLARING VARIBALE FOR WIDTH 
      var windowWidth = window.innerWidth;
  
      // CHANGING VALUES AND UI TO HANDLE RESPONSIVENESS BASED ON HEIGHT AND WIDTH
      if(windowWidth > 1920 && windowHeight < 500)
      {
        this.headSize = '16px';
        this.Allheight= true;
        this.Customheight1=false;
        this.Customheight2=false;
        this.Customheight3=false;
      }
      else if(windowWidth > 1920 && windowHeight > 500 && windowHeight <= 600)
      {
        this.headSize = '14px';
        this.Allheight= true;
        this.Customheight1=false;
        this.Customheight2=false;
        this.Customheight3=false;
      }
      else if (windowWidth <= 1920 && windowWidth > 1260  && windowHeight > 650)
      {
        this.headSize = '15px';
        this.Allheight= true;
        this.Customheight1=false;
        this.Customheight2=false;
        this.Customheight3=false;
      }
      else if (windowWidth <= 1920 && windowWidth > 1260  && windowHeight <= 650)
      {
        this.headSize = '15px';
        this.Allheight= false;
        this.Customheight1=true;
        this.Customheight2=false;
        this.Customheight3=false;
      }
      else if (windowWidth <= 1260 && windowWidth > 1090 && windowHeight > 600 && windowHeight <= 1080)
      {
        this.headSize = '15px';
        this.Allheight= false;
        this.Customheight1=true;
        this.Customheight2=false;
        this.Customheight3=false;
      }
      else if (windowWidth <= 1090 && windowWidth > 992 && windowHeight > 600 && windowHeight <= 1080)
      {
        this.headSize = '11.5px';
        this.Allheight= false;
        this.Customheight1=false;
        this.Customheight2=true;
        this.Customheight3=false;
      }
      else if (windowWidth <= 992 && windowWidth > 767 && windowHeight > 600 && windowHeight <= 1080)
      {
        this.headSize = '11.5px';
        this.Allheight= false;
        this.Customheight1=false;
        this.Customheight2=false;
        this.Customheight3=true;
      }
      else if (windowWidth <= 767 && windowWidth >= 500 && windowHeight > 600 && windowHeight <= 1080)
      {
        this.headSize = '11.5px';
        this.Allheight= false;
        this.Customheight1=false;
        this.Customheight2=true;
        this.Customheight3=false;
      }
      else if (windowWidth <= 1920 && windowWidth > 1260  && windowHeight <= 600)
      {
        this.headSize = '15px';
        this.Allheight= true;
        this.Customheight1=false;
        this.Customheight2=false;
        this.Customheight3=false;
      }
      else if (windowWidth <= 1260 && windowWidth > 1090 && windowHeight <= 600)
      {
        this.headSize = '15px';
        this.Allheight= false;
        this.Customheight1=true;
        this.Customheight2=false;
        this.Customheight3=false;
      }
      else if (windowWidth <= 1090 && windowWidth > 992 && windowHeight <= 600 )
      {
        this.headSize = '11.5px';
        this.Allheight= false;
        this.Customheight1=false;
        this.Customheight2=true;
        this.Customheight3=false;
      }
      else if (windowWidth <= 992 && windowWidth > 767 && windowHeight <= 600)
      {
        this.headSize = '11.5px';
        this.Allheight= false;
        this.Customheight1=false;
        this.Customheight2=false;
        this.Customheight3=true;
      }
      else if (windowWidth <= 767 && windowWidth >= 500 && windowHeight <= 600)
      {
        this.headSize = '11.5px';
        this.Allheight= false;
        this.Customheight1=false;
        this.Customheight2=true;
        this.Customheight3=false;
      }
    }
  
  //UPDATE THE ITEM NUMBER BASED ON SCREEN SIZE
  updatePageItem ()
  {
    var topicDivHeight = 0;
    var sidebarHeight = parseInt (localStorage.getItem ('sidebarHeight'));
    if (document.getElementById ('reserved-title') && document.getElementById ('reserved-category'))
    {
      var totalHeight = document.getElementById ('full-header').offsetHeight +
        document.getElementById ('reserved-title').offsetHeight +
        document.getElementById ('reserved-category').offsetHeight;
      topicDivHeight = sidebarHeight - totalHeight;
    }
    var column = 5;
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    if (windowWidth > 1920 && windowHeight < 500)
    {
      column = 4;
    }
    else if (windowWidth <= 1920 && windowWidth > 935 && windowHeight <= 500)
    {
      column = 4;
    }
    else if (windowWidth > 1920 && windowHeight > 500 && windowHeight <= 600)
    {
      column = 4;
    }
    else if (windowWidth <= 1920 && windowWidth > 1800 && windowHeight > 500 && windowHeight <= 600)
    {
      column = 4;
    }
    else if (windowWidth <= 1800 && windowWidth > 1700 && windowHeight > 500 && windowHeight <= 600)
    {
      column = 2;
    }
    if (this.tTopic && this.tTopic.length > 0)
    {
      var grouped = _.groupBy (this.tTopic, function(topic)
      {
        return topic.tempCat;
      });
      var approxHeight = 0, row = 0, itemcount = 0, covertdHeight = 0;
      for (var key in grouped)
      {
        approxHeight += 50;
        var current = grouped[key];
        if (current && current.length) row = Math.ceil (current.length / column);
        approxHeight += row * 40;
        if (approxHeight < topicDivHeight)
        {
          itemcount += current.length;
          covertdHeight = approxHeight;
        }
        else
        {
          var diff = topicDivHeight - covertdHeight;
          if (diff > 80)
          {
            itemcount += (Math.round (diff / 40)) * column;
            console.log (itemcount)
          }
          break;
        }
      }
      this.itemPerPage = itemcount;
      if (windowWidth < 768)
      {
        this.itemPerPage = 20;
      }
    }
  }
  
  // GET CATEGORY
  onSelectCategory (category)
  {
    // PUSH AND POP SELECTED CATEGORY
    if (this.highlightCategory && this.highlightCategory.indexOf (category) === -1)
    {
      this.selectedCategory.push (category.text);
      // IF SELECTED THAN APPLY BLUE BACKGROUND
      this.highlightCategory.push (category);
      this.getAllTopic (category);
    }
    else
    {
      this.selectedCategory = this.selectedCategory.filter (e => e !== category.text);
      this.highlightCategory = this.highlightCategory.filter (e => e !== category);
      this.tTopic = this.tTopic.filter (item =>
      {
        return item['tempCat'] != category.text;
      });
    }
    this.notTopicFound = false;
  }
  
  // SEARCH TOPIC
  getSearchInput ()
  {
    this.notTopicFound = false;
    if (!this.tTopic || this.tTopic.length === 0)
    {
      this.onAll ();
    }
    setTimeout (() =>
    {
      this.searchTopic = this.searchTopicForm.value.searchterm;
      if (this.searchTopic && this.tTopic)
      {
        const index = this.tTopic.findIndex (item => item.topic.toLowerCase () === this.searchTopic.toLowerCase ());
        if (index > -1)
        {
          this.currentPage = Math.floor ((index / this.itemPerPage) + 1);
        }
        else
        {
          this.onClear ();
          this.notTopicFound = true;
        }
      }
    }, 1000)
  }
  
  // GET ALL TOPIC
  getAllTopic (category)
  {
    // IT'S CALCULATING TEMP DATA BECAUSE WE HAVE NOT ENOUGH DATA....
    this.topicService.getAllTopic ().subscribe ((result: any) =>
    {
      result.forEach ((item: any, index) =>
      {
        item['index'] = index;
        item['tempCat'] = category.text;
      });
      this.tTopic = this.tTopic.concat (result);
      this.updatePageItem ();
    });
  }
  
  // CLEAR ALL SELECTED CATEGORY
  onClear ()
  {
    this.selectedCategory = [];
    this.highlightCategory = [];
    this.tTopic = [];
    this.notTopicFound = false;
    this.searchTopicForm.value.searchterm = '';
  }
  
  // SELECT ALL CATEGORY
  onAll ()
  {
    // IT'S CALCULATING TEMP DATA BECAUSE WE HAVE NOT ENOUGH DATA....
    this.selectedCategory = this.categories.map (a => a.text);
    this.tTopic = [];
    this.topicService.getAllTopic ().subscribe ((result: Array<any>) =>
    {
      const tempStore = result;
      this.selectedCategory.map ((category) =>
      {
        let res = tempStore && tempStore.map ((data, index) =>
        {
          return {
            ...data,
            index: index,
            tempCat: category
          }
        });
        this.tTopic = [
          ...this.tTopic,
          ...res
        ];
      });
      this.highlightCategory = this.categories;
    });
  }
}
