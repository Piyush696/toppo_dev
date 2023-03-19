import {Component, OnInit} from '@angular/core';
import {State} from '@progress/kendo-data-query';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {GridDataResult, DataStateChangeEvent} from '@progress/kendo-angular-grid';
import {UserService} from '../../../shared/services/user.service';
import {AlertService} from '../../../shared/services/alert.service';
import {MessageService} from '../../../shared/services/message.service';
import {SiteVariableService} from '../../../shared/services/sitevariable.service';
import {TopicService} from '../../../shared/services/topic.service';

// ADDING HTML AND CSS FILES FOR THIS COMPONENT
@Component
({
  selector: 'app-create-topics',
  templateUrl: './create-topics.component.html',
  styleUrls: ['./create-topics.component.css']
})

// MAIN COMPONENT CLASS FOR THIS COMPONENT THAT WLL BE IMPORTED TO ANOTHER COMPONENT
export class CreateTopicsComponent implements OnInit
{
  
  // USED FOR FORM
  addTopicForm: FormGroup;
  public formtopicTypes: any;
  public formtopicCategories: any;
  public formtopicSubCategories: any;
  public formtopicStatus: any;
  public resetDisabled = true;
  public addClicked = false;
  site_variables: any;
  public dispaly_success_message = '';
  public grid_success_message = '';
  error_messages = {};
  user_id: number;
  user_role: string;
  
  // USED FOR GRID PAGINATION
  public pageSize: number;
  public state: State =
  {
    skip: 0,
    take: this.pageSize
  };
  public buttonCount = 4;
  public info = true;
  public type: 'numeric' | 'input' = 'numeric';
  public pageSizes = [5,10,20];
  public previousNext = true;
  private editedRowIndex: number;
  private editedTopic: any;
  
  // USED FOR GRID DATA
  public gridData: any;
  public gridtopicTypes: any;
  public gridtopicCategories: any;
  public gridtopicSubCategories: any;
  public gridtopicStatus: any;
  public defaultItem: any;
  public dialogOpened = false;
  
  // USED FOR FILTERING THE GRID
  public filterOptions = [];
  
  // DEFAULT CONSTRUCTOR FOR THE COMPONENT CLASS, CONSTRUCTOR IS CALLED BY DEFAULT WHEN COMPONENT LOADED
  constructor
  (
    private formBuilder: FormBuilder,
    private user: UserService,
    private message: MessageService,
    private alertService: AlertService,
    private topic: TopicService,
    private sitevariable: SiteVariableService
  )
  {
    // ANY CODE IN THIS BLOCK WILL RUN BEFORE LOADING THE COMPONENT
  }
  
  // THIS FUNCTION WILL RUN ON COMPONENT INITIALIZATION
  async ngOnInit ()
  {
    
    // APPLYING ANGULAR REACTIVE FORM CONFIGURAION
    this.addTopicForm = this.formBuilder.group (
      {
        user_id: '',
        user_role: '',
        newtopic:
        [
          '',
          [Validators.required]
        ],
        newtopictype:
        [
          '',
          [Validators.required]
        ],
        newtopiccategory:
        [
          '',
          [Validators.required]
        ],
        newtopicsubcategory:
        [
          '',
          [Validators.required]
        ],
        newtopicstatus:
        [
          '',
          [Validators.required]
        ]
        
      });
    
    // SET TO CURRENT USER ID AND TYPE
    this.user_id = this.user.getCurrentUserId ();
    this.user_role = this.user.getCurrentUserRole ();
    this.pageSize = this.user.getItemsPerPage ();
    this.state.take = this.pageSize;
    
    // GETTING TOPIC TYPES
    this.topic.getTopicTypes ().subscribe (result =>
    {
      this.formtopicTypes = result;
      this.gridtopicTypes = result;
    });
    
    // GET TOPIC CATEGORIES
    this.topic.getTopicCategories ().subscribe (result =>
    {
      this.formtopicCategories = result;
      this.gridtopicCategories = result;
    });
    
    // GET TOPIC SUB CATEGORIES
    this.topic.getTopicSubCategories ('').subscribe (result =>
    {
      this.formtopicSubCategories = result;
    });
    
    // GET TOPIC STATUS LIST
    this.topic.getTopicStatus ({
      status: [
        'TSV',
        'TOP'
      ]
    }).subscribe (result =>
    {
      this.formtopicStatus = result;
      this.gridtopicStatus = result;
    });
    
    // FILTERING DATA GRID
    this.addTopicForm.valueChanges.subscribe (val =>
    {
      this.state.skip = 0;
      
      // MAKING EMPTY THE FILTER ARRAY
      this.filterOptions = [];
      
      // IF TOPIC FIELD IS NOT BLANK PUSH IT'S VALUE TO FILTER ARRAY
      let topic = val.newtopic;
      if (topic != '' && topic.length > 1)
      {
        this.filterOptions.push (
          {
            field: 'topic',
            operator: 'contains',
            value: topic
          });
      }
      
      // IF TOPIC TYPE FIELD IS NOT BLANK PUSH IT'S VALUE TO FILTER ARRAY
      let topictype = val.newtopictype;
      if (topictype != '')
      {
        this.filterOptions.push (
          {
            field: 'topictype',
            operator: 'equals',
            value: topictype
          });
      }
      
      // IF CATEGORY FIELD IS NOT BLANK PUSH IT'S VALUE TO FILTER ARRAY
      let topiccategory = val.newtopiccategory;
      if (topiccategory != '')
      {
        this.filterOptions.push (
          {
            field: 'topiccategory',
            operator: 'contains',
            value: topiccategory
          });
      }
      
      // IF SUB CATEGORY FIELD IS NOT BLANK PUSH IT'S VALUE TO FILTER ARRAY
      let topicsubcategory = val.newtopicsubcategory;
      if (topicsubcategory != '')
      {
        this.filterOptions.push (
          {
            field: 'topicsubcategory',
            operator: 'contains',
            value: topicsubcategory
          });
      }
      
      // IF STATUS FIELD IS NOT BLANK PUSH IT'S VALUE TO FILTER ARRAY
      let topicstatus = val.newtopicstatus;
      if (topicstatus != '')
      {
        this.filterOptions.push (
          {
            field: 'topicstatus',
            operator: 'equals',
            value: topicstatus
          });
      }
      
      // ENABLE THE RESET BUTTON IF ANY FILTER APPLIED
      if (this.filterOptions.length > 0)
      {
        this.resetDisabled = false;
      }
      else
      {
        this.resetDisabled = true;
      }
      
      // RELOAD GRID
      this.getReservedTopics ();
      
    });
    
    // GETTING TOPIC SUB CATEGORIES ON CHOOSING CATEGORY IN ADD TOPIC FORM
    this.addTopicForm.get ('newtopiccategory').valueChanges.subscribe (val =>
    {
      this.topic.getTopicSubCategories (val).subscribe (result =>
      {
        this.formtopicSubCategories = result;
      });
    });
    
    // GETTING ERROR MESSAGES FROM DATABASE
    this.error_messages = await this.message.getMessages ();
    
    // GETTING SITE VARIABLES FROM DATABASE
    this.site_variables = await this.sitevariable.getSiteVariables ();
    
    // LOAD GRID ON COMPONENT LOAD
    this.getReservedTopics ();
  }
  
  // MAIN FUNCTION TO CALL SERVICE AND BINDING DATA TO DATA GRID
  public getReservedTopics ()
  {
    
    // ADD FILTER OPTION TO API CALL
    if (this.filterOptions.length > 0)
    {
      this.state.filter = {
        logic: 'and',
        filters: this.filterOptions
      };
    }
    else
    {
      
      // SET FILTERS TO NULL IF NO FILTER SELECTED
      this.state.filter = null;
    }
    
    // GETTING DATA FROM DATABASE
    this.topic.getReservedTopics (this.state, this.user_id, this.user_role).subscribe (result =>
    {
      if (result.count > 0)
      {
        this.gridData = {
          data: result.topics,
          total: result.count
        };
      }
      else
      {
        this.gridData = false;
      }
      
    });
  }
  
  // HANDLING CATEGORY CHANGES IN GRID EDIT
  public handleCategoryChange (value)
  {
    
    // GETTING SUB CATEGORIES FROM DATABASE BY CATEGORY ID
    this.topic.getTopicSubCategories (value).subscribe (result =>
    {
      this.defaultItem = result[0];
      this.gridtopicSubCategories = result;
      
    });
  }
  
  // GRID PAGE CHANGE EVENT
  public changePager (value)
  {
    this.state.take = value;
    this.state.skip = 0;
    this.getReservedTopics ();
    this.user.updateItemsPerPage (this.user_id, this.pageSize);
  }
  
  // HANDLING STATE CHANGE IN DATA GRID
  public dataStateChange (state: DataStateChangeEvent)
  {
    if (this.pageSize != state.take)
    {
      this.pageSize = state.take;
      this.user.updateItemsPerPage (this.user_id, this.pageSize);
    }
    this.state = state;
    this.getReservedTopics ();
  }
  
  // HANDLING EDIT BUTTON CLICK
  public editHandler ({sender, rowIndex, dataItem})
  {
    this.closeEditor (sender);
    this.topic.getTopicSubCategories (dataItem.category).subscribe (result =>
    {
      this.gridtopicSubCategories = result;
    });
    this.editedRowIndex = rowIndex;
    this.editedTopic = Object.assign ({}, dataItem);
    sender.editRow (rowIndex);
  }
  
  // HANDLING CANCEL BUTTON CLICK
  public cancelHandler ({sender, rowIndex})
  {
    this.closeEditor (sender, rowIndex);
  }
  
  // HANDLING SAVE BUTTON CLICK
  public saveHandler ({sender, rowIndex, dataItem, isNew})
  {
    
    // CALLING UPDATE API
    this.topic.updateTopic (dataItem).subscribe (result =>
    {
      if (result.success)
      {
        
        // DISPLAY UPDATE SUCCESS MESSAGE
        this.grid_success_message = this.error_messages['MSG-CREATE-TOPIC-UPDATE-SUCCESS'];
        setTimeout (() =>
        {
          
          // HIDE U{DATE SUCCESS MESSAGE
          this.grid_success_message = '';
        }, this.site_variables.messagedisplaytime * 1000);
        
        // RELOADING THE GRID DATA BY CALLING THE API
        this.topic.getReservedTopics (this.state, this.user_id, this.user_role).subscribe (result1 =>
        {
          
          // ASSIGNING API RESPONSE TO GRID DATA SOURCE
          this.gridData = {
            data: result1.topics,
            total: result1.count
          };
        });
      }
    });
    
    sender.closeRow (rowIndex);
    this.editedRowIndex = undefined;
    this.editedTopic = undefined;
  }
  
  // HANDLING REMOVE BUTTON CLICK
  public removeHandler ({sender, rowIndex, dataItem})
  {
    this.dialogOpened = true;
    this.editedTopic = Object.assign ({}, dataItem);
  }
  
  // HANDLING DELETE CONFIRM BUTTON CLICK
  public action (status)
  {
    
    // IF YES CLICKED
    if (status == 'yes')
    {
      
      // CALLING DELETE TOPIC API
      this.topic.removeTopic (this.editedTopic).subscribe (result =>
      {
        if (result.success)
        {
          
          // DISPLAY DELETE SUCCESS MESSAGE
          this.grid_success_message = this.error_messages['MSG-CREATE-TOPIC-REMOVE-SUCCESS'];
          setTimeout (() =>
          {
            
            // HIDE DELETE SUCCESS MESSAGE
            this.grid_success_message = '';
          }, this.site_variables.messagedisplaytime * 1000);
          
          // RELOADING THE GRID
          this.topic.getReservedTopics (this.state, this.user_id, this.user_role).subscribe (result1 =>
          {
            
            // ASSIGNING API RESPONSE TO GRID DATA SOURCE
            this.gridData =
              {
                data: result1.topics,
                total: result1.count
              };
          });
        }
        
      });
    }
    
    this.editedTopic = undefined;
    this.dialogOpened = false;
  }
  
  // HANDLE THE EDIT CANCEL BUTTON CLICK
  private closeEditor (grid, rowIndex = this.editedRowIndex)
  {
    grid.closeRow (rowIndex);
    this.editedRowIndex = undefined;
    this.editedTopic = undefined;
  }
  
  // RESET FORM
  public resetForm ()
  {
    
    // RESETTING FORM VALUES
    this.addTopicForm.reset (
      {
        newtopic: '',
        newtopictype: '',
        newtopiccategory: '',
        newtopicsubcategory: '',
        newtopicstatus: ''
      });
    this.addClicked = false;
    this.dispaly_success_message = '';
    
    // CLEARING FILTER OPTIONS
    this.filterOptions = [];
    
  }
  
  // HANDLING ADD TOPIC BUTTON CLICK
  onSubmit ()
  {
    this.addTopicForm.get ('user_id').setValue (this.user_id);
    this.addTopicForm.get ('user_role').setValue (this.user_role);
    
    if (this.addTopicForm.invalid)
    {
      this.addClicked = true;
      this.resetDisabled = false;
      return;
    }
    
    // CALLING ADD NEW TOPIC API
    this.topic.addNewTopic (this.addTopicForm.value).subscribe (data =>
    {
      if (data.success)
      {
        
        // DISPLAY ADD SUCCESS MESSAGE
        this.dispaly_success_message = this.error_messages['MSG-CREATE-TOPIC-ADD-SUCCESS'];
        setTimeout (() =>
        {
          
          // HIDE ADD SUCCESS MESSAGE
          this.dispaly_success_message = '';
        }, this.site_variables.messagedisplaytime * 1000);
        
        // ASSIGNING API RESPONSE TO GRID DATA SOURCE
        this.gridData =
          {
            data: data.topics,
            total: data.count
          };
      }
      
    }, error =>
    {
      this.alertService.error (error);
    });
  }
  
  // THIS FUNCTION WILL RETURN THE REACTIVE FORM CONTROLS
  get f ()
  {
    return this.addTopicForm.controls;
  }
}
