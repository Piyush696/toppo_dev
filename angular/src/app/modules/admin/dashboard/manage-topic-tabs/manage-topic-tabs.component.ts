import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators, FormControl} from '@angular/forms';
import {TabTypeService} from '../../../shared/services/tabtype.service';
import {TopicService} from '../../../shared/services/topic.service';
import {MessageService} from '../../../shared/services/message.service';
import * as _ from 'lodash';

@Component
({
  selector: 'app-manage-topic-tabs',
  templateUrl: './manage-topic-tabs.component.html',
  styleUrls: ['./manage-topic-tabs.component.css']
})

export class ManageTopicTabsComponent implements OnInit
{
  public checked: boolean = true;
  public topicCategories: any;
  public tabtypes: any;
  public selectedTabs: string = '';
  public list = [];
  
  // HOLD ERROR FLAG
  public isError: boolean = false;
  public error: any = [];
  
  // HOLDS ALL MESSAGE
  public messages_list: {};
  public required_subtab_message: '';
  public topic_added_successfully: '';
  
  // HOLD THE SELECTED CATEGORY AND TOPIC
  public selectedTopic;
  public selectedSubTabs: '';
  
  // HOLD UPDATED TAB VALUE
  public updatedTabValue: Array<any> = [];
  public currentSubTab: Array<any> = [];
  public changes: any = [];
  
  constructor (
    private tabservice: TabTypeService,
    private topic: TopicService,
    private message: MessageService
  )
  {
  }
  
  async ngOnInit ()
  {
    // GETTING ALL MESSAGES
    this.messages_list = await this.message.getMessages ();
    this.required_subtab_message = this.messages_list['MANAGETOPICTABS-SUBTABNEEDED'];
  }
  
  // OPEN SUB TABS
  openTree (index)
  {
    this.list.push (index);
  }
  
  // CLOSE SUB TABS
  closeTree (index)
  {
    let arrayIndex = this.list.indexOf (index);
    this.list.splice (arrayIndex, 1);
  }
  
  // SAVE TABS
  submitTab ()
  {
    this.checkTabValidation ();
    if (this.error.length === 0)
    {
      this.manipulateUpdatedTab ();
      
      // CALL addTabTopic TO INSERT TABS
      this.topic.saveTopicTabs (this.selectedTopic.topic, this.updatedTabValue).then ((result: any) =>
      {
        if (result.success)
        {
          this.changes = [];
          this.topic_added_successfully = this.messages_list['MSG-TOPIC-TAB-ADD-SUCCESS'];
          setTimeout (() =>
          {
            this.topic_added_successfully = '';
          }, 6000)
        }
      });
    }
  }
  
  // MANIPULATE UPDATED TABS
  manipulateUpdatedTab ()
  {
    this.updatedTabValue = [];
    this.tabtypes.map (tab =>
    {
      if (tab && tab.children.length > 0)
      {
        tab.children.map (child =>
        {
          if (child.value === true)
          {
            this.updatedTabValue.push (child.tabname);
          }
        });
      }
      if (tab.value === true)
      {
        this.updatedTabValue.push (tab.tabname);
      }
    });
    this.updatedTabValue = _.uniq (this.updatedTabValue, false);
  }
  
  // CHECK VALIDATION
  checkTabValidation ()
  {
    var filtered = this.error = [];
    this.tabtypes.map ((tab: any) =>
    {
      if (tab && tab.value && tab.children.length > 0)
      {
        filtered = _.map (tab.children, function(child)
        {
          if (child.value == false) return child;
        });
        if (_.without (filtered, undefined).length === tab.children.length)
        {
          this.error.push (tab.tabname);
        }
      }
    });
  }
  
  // GET SELECTED CATEGORY AND TOPIC
  getTopic (selectedTopic)
  {
    if (selectedTopic && selectedTopic.topic.length > 0)
    {
      this.selectedTopic = selectedTopic;
      this.list = [];
      this.getTabTypes (this.selectedTopic.topic);
    }
  }
  
  // GET TAB BY TOPIC
  getTabTypes (topic)
  {
    // GET TAB TYPES
    this.tabservice.getTabTypes (topic).subscribe (data =>
    {
      this.tabtypes = data;
      
      // SET THE STATIC CHILD FOR THE GUIDE FOR NOW.
      this.tabtypes[0].children =
        [
          {
            'tabname': "Site Overview",
            'value': false
          },
          {
            'tabname': "Topic Overview",
            'value': false
          },
          {
            'tabname': "Custom 1",
            'value': false
          },
          {
            'tabname': "Custom 2",
            'value': false
          },
          {
            'tabname': "Custom 3",
            'value': false
          }
        ];
      
      // INITIALLY BLOGS TAB IS ON
      if (this.tabtypes && this.tabtypes.length > 0 && this.tabtypes[0].activetab && this.tabtypes[0].activetab.length === 0)
      {
        this.tabtypes.map ((tab, index) =>
        {
          if (tab.description === "Blogs")
          {
            tab.value = false;
          }
          else
          {
            tab.value = true;
            if (tab && tab.children.length > 0)
            {
              tab.children[0].value = true;
              this.openTree (index);
            }
          }
        });
      }
      
      // SET VALUE IN TREE ACCORDING TO DATABASE ACTIVE TAB
      this.tabtypes.map ((tab, index) =>
      {
        if (tab && tab.children.length > 0)
        {
          tab.children.map ((child) =>
          {
            if (this.tabtypes[0].activetab.indexOf (child.tabname) > -1)
            {
              child.value = true;
              this.openTree (index);
            }
          })
        }
      })
    });
    
  }
  
  // SET PARENT TRUE IF CHILD IS TRUE
  changeChild (childIndex, childValue, parentIndex)
  {
    this.error = [];
    if (childValue)
    {
      if (this.tabtypes[parentIndex].value === false)
      {
        this.tabtypes[parentIndex].value = childValue;
      }
    }
    else
    {
      if (this.tabtypes[parentIndex] && this.tabtypes[parentIndex].children.length > 0)
      {
        var filterActive = this.tabtypes[parentIndex].children.filter (child => child.value == false);
        if (filterActive.length === this.tabtypes[parentIndex].children.length)
        {
          this.error.push (this.tabtypes[parentIndex].tabname);
        }
      }
      
    }
    this.unSaved (parentIndex + "" + childIndex);
  }
  
  // SET CHILD FALSE IF PARENT IS FALSE
  changeParent (parentIndex, tabValue)
  {
    this.error = [];
    if (tabValue)
    {
      if (this.tabtypes[parentIndex] && this.tabtypes[parentIndex].children.length > 0)
      {
        this.tabtypes[parentIndex].children[0].value = true;
      }
    }
    else
    {
      if (this.tabtypes[parentIndex] && this.tabtypes[parentIndex].children.length > 0)
      {
        this.tabtypes[parentIndex].children.map (child => child.value = false);
      }
    }
    this.unSaved (parentIndex);
  }
  
  unSaved (index)
  {
    if (this.changes.indexOf (index) > -1)
    {
      let arrayIndex = this.changes.indexOf (index);
      this.changes.splice (arrayIndex, 1);
    }
    else
    {
      this.changes.push (index);
    }
  }
  
  // SET SELECTED TAB
  selectedTab (tab)
  {
    this.selectedTabs = tab.tabname;
    if (tab && tab.children && tab.children.length > 0)
    {
      this.currentSubTab = tab.children;
    }
    else
    {
      this.currentSubTab = [];
    }
  }
  
}

// RETURN THE ACTIVE TAB OF TOPIC
@Pipe ({
  name: 'filterActiveTab',
  pure: false
})
export class FilterActiveTab implements PipeTransform
{
  transform (tabs: any[]): any
  {
    if (!tabs)
    {
      return tabs;
    }
    return tabs.filter (e => e.value === true);
  }
}
