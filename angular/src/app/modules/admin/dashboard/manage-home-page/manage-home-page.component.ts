import {Component, OnInit} from '@angular/core';
import {GroupResult, groupBy} from '@progress/kendo-data-query';
import * as $ from 'jquery';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {UserService} from '../../../shared/services/user.service';
import {AlertService} from '../../../shared/services/alert.service';
import {ForbiddenWords} from '../../../shared/services/forbidden.service';
import {MessageService} from '../../../shared/services/message.service';
import {TopicService} from '../../../shared/services/topic.service';
import {SiteVariableService} from '../../../shared/services/sitevariable.service';
import '@progress/kendo-ui';
import * as _ from 'lodash';

// ADDING HTML AND CSS FILES FOR THIS COMPONENT
@Component
({
  selector: 'app-manage-home-page',
  templateUrl: './manage-home-page.component.html',
  styleUrls: ['./manage-home-page.component.css']
})

// MAIN COMPONENT CLASS FOR THIS COMPONENT THAT WLL BE IMPORTED TO ANOTHER COMPONENT
export class ManageHomePageComponent implements OnInit
{
  public formtopicStatus: any;
  public addClicked = false;
  
  // HOLD MASSAGE
  dispaly_success_message = '';
  error_messages = {};
  
  // HOLDS FORBIDDEN WORDS
  forbidden_words: any;
  
  // HOLDS CURRENT USER DETAILS
  user_id: number;
  user_role: string;
  
  // HOLDS TOPIC LIST
  topicList: any;
  topicListSource: any;
  filteredTopicList: any;
  filteredAutoCompateTopicList: any;
  topicContent: any;
  
  // HOLDS SELECTED TOPIC
  selectedStatus: any;
  searchedTopic: any = {};
  site_variables: any;
  
  // HOLDS FORM VARIABLE
  homeTabForm: FormGroup = this.formBuilder.group (
    {
      topic: '',
      topicstatus: '',
      title: '',
    });
  
  // HOLD ERROR MESSAGE
  error_type: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  diaplayMessage: any = false;
  
  // HOLDS IMAGE DETAILS
  imageBase64: any = '';
  image_name: any = '';
  
  // HOLDS HOME ID FOR UPDATE
  tab_home_id: any = '';
  info_message: any = '';
  showForm = false;
  
  // DEFAULT CONSTRUCTOR FOR THE COMPONENT CLASS, CONSTRUCTOR IS CALLED BY DEFAULT WHEN COMPONENT LOADED
  constructor
  (
    private formBuilder: FormBuilder,
    private user: UserService,
    private Forbidden: ForbiddenWords,
    private message: MessageService,
    private topic: TopicService,
    private variable: SiteVariableService
  )
  {
    // ANY CODE IN THIS BLOCK WILL RUN BEFORE LOADING THE COMPONENT
  }
  
  // THIS FUNCTION WILL RUN ON COMPONENT INITIALIZATION
  async ngOnInit ()
  {
    const self = this;
    
    // GETTING FORBIDDEN WORDS
    this.forbidden_words = await this.Forbidden.getForbiddenWords ();
    
    // GETTING ERROR MESSAGES
    this.error_messages = await this.message.getMessages ();
    
    // GETTING FORBIDDEN WORDS
    this.forbidden_words = await this.Forbidden.getForbiddenWords ();
    
    // GETTING SITE VARIABLES
    this.site_variables = await this.variable.getSiteVariables ();
    
    // APPLYING ANGULAR REACTIVE FORM CONFIGURAION
    this.homeTabForm = this.formBuilder.group (
      {
        topic: [
          '',
          [Validators.required]
        ],
        topicstatus: [
          '',
          [Validators.required]
        ],
        title: [
          '',
          [
            Validators.required,
            Validators.minLength (this.site_variables.hometitlemin),
            Validators.maxLength (this.site_variables.hometitlemax)
          ]
        ]
      });
    
    // KENDO EDITOR CONFIGURATION
    $ ('#editor').kendoEditor (
      {
        resizable:
          {
            content: true,
            toolbar: true
          },
        paste: function(e)
        {
          if ((/^<img src="data:image/).test (e.html))
          {
            e.html = '';
          }
        },
        change: function(e)
        {
          this.diaplayMessage = false;
        },
        tools:
        [
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'justifyLeft',
          'justifyCenter',
          'justifyRight',
          'justifyFull',
          'insertUnorderedList',
          'insertOrderedList',
          'indent',
          'outdent',
          'createLink',
          'unlink',
          'subscript',
          'superscript',
          'tableWizard',
          'createTable',
          'addRowAbove',
          'addRowBelow',
          'addColumnLeft',
          'addColumnRight',
          'deleteRow',
          'deleteColumn',
          'viewHtml',
          'foreColor',
          'backColor',
          'formatting',
          'cleanFormatting',
          'fontSize',
          'fontName'
        ]
      });
    
    // KENDO VALIDATOR FOR THE FORM
    const container = $ ('#editor');
    kendo.init (container);
    container.kendoValidator (
      {
        rules:
          {
            forbidden: function(textarea)
            {
              self.diaplayMessage = false;
              
              // GET VALUE FROM EDITOR
              const editor = $ ('#editor').data ('kendoEditor');
              let stringValue = editor.value ();
              
              // GET THE PLAIN TEXT WITHOUT HTML
              let plainText = stringValue.replace (/(<([^>]+)>)/ig, '');
              plainText = plainText.replace (/&nbsp;/ig, ' ');
              
              // SPLIT STRING IN WORD ARRAY
              let subString = plainText.split (' ');
              
              // HOLDS REPLACED ARRAY
              const replacedarray = [];
              subString = _.uniq (subString, false);
              subString.forEach ((str, index) =>
              {
                
                replacedarray.push (
                  {
                    'av': str,
                    'rv': `<span class="invalidText" id="kendo-tooltip` + index + `" style="color: red;" kendoTooltip position="top" title="` + self.error_messages['FORBIDDEN-WORD-ERROR'] + `">` + str + `</span>`
                  });
                
                // CHECK THE WORD IS FORBIDDEN OR NOT
                if (str !== '' && self.forbidden_words.indexOf (str.toLowerCase ()) > -1)
                {
                  const elem = $ ('<div>' + stringValue + '<div>');
                  if (!elem.find ('.invalidText:contains("' + str + '")')[0])
                  {
                    const regex = new RegExp (str, 'g');
                    stringValue = stringValue.replace (regex, replacedarray[index].rv);
                  }
                }
                else
                {
                  const elem = $ ('<div>' + stringValue + '<div>');
                  if (elem.find ('.invalidText:contains("' + str + '")')[0] && elem.find ('.invalidText:contains("' + str + '")')[0].outerHTML.length > 0)
                  {
                    elem.find ('.invalidText:contains("' + str + '")')[0].outerHTML = str;
                    stringValue = elem.html ();
                  }
                }
                const topicBody = kendo.observable (
                  {
                    textareaValue: stringValue
                  });
                kendo.bind ($ ('#home-topic'), topicBody);
              });
              
              return true;
            },
            minTextLength: function(textarea)
            {
              if (textarea.is ('[data-mintextlength-msg]') && textarea.val () != '')
              {
                document.getElementsByTagName ('textarea')[0].attributes[6].nodeValue = self.error_messages['MSG-MANAGE-HOME-CONTENT-INVALID'] + ' ' + self.site_variables.homecontentmin + ' to ' + self.site_variables.homecontentmax;
              }
              if (textarea.is ('[data-mintextlength-msg]') && textarea.val () != '')
              {
                const minlength = textarea.attr ('data-mintextlength');
                const value = textarea.data ('kendoEditor').value ();
                return value.replace (/<[^>]+>/g, '').length >= self.site_variables.homecontentmin;
              }
              
              return true;
            },
            maxTextLength: function(textarea)
            {
              if (textarea.is ('[data-mintextlength-msg]') && textarea.val () != '')
              {
                document.getElementsByTagName ('textarea')[0].attributes[6].nodeValue = self.error_messages['MSG-MANAGE-HOME-CONTENT-INVALID'] + ' ' + self.site_variables.homecontentmin + ' to ' + self.site_variables.homecontentmax;
              }
              if (textarea.is ('[data-maxtextlength-msg]') && textarea.val () != '')
              {
                const maxlength = textarea.attr ('data-maxtextlength');
                const value = textarea.data ('kendoEditor').value ();
                return value.replace (/<[^>]+>/g, '').length <= self.site_variables.homecontentmax;
              }
              
              return true;
            },
            maxHtmlLength: function(textarea)
            {
              if (textarea.is ('[data-maxhtmllength-msg]') && textarea.val () != '')
              {
                const maxlength = textarea.attr ('data-maxhtmllength');
                const value = textarea.data ('kendoEditor').value ();
                return value.length <= maxlength;
              }
              return true;
            }
          }
      });
    
    // SET TO CURRENT USER ID AND TYPE
    this.user_id = this.user.getCurrentUserId ();
    this.user_role = this.user.getCurrentUserRole ();
    
    // GET TOPIC STATUS LIST FOR ADMIN
    if (this.user_role === 'A')
    {
      this.topic.getTopicStatus ({
        status:
        [
          'UNC',
          'TSV',
          'TOP'
        ]
      }).subscribe (result =>
      {
        this.formtopicStatus = result;
      });
    }
    else
    {
      
      // GET TOPIC STATUS LIST FOR NON ADMIN
      this.topic.getTopicStatus ({status: ['LIV']}).subscribe (result =>
      {
        this.formtopicStatus = result;
      });
    }
    
    // GET TOPIC LIST ON PAGE LOAD
    this.topic.getAllTopic ({
      'userId': this.user_id,
      'userRole': this.user_role
    }).subscribe (result =>
    {
      this.topicList = result;
      this.topicListSource = result;
      
      // DISABLE THE TOPIC COMBO BOX ON PAGE LOAD
      this.homeTabForm.get ('topic').disable ();
    });
    
  }
  
  // THIS FUNCTION WILL RETURN THE REACTIVE FORM CONTROLS
  get f ()
  {
    return this.homeTabForm.controls;
  }
  
  // THIS FUNCTION IS CALLED WHEN WE CHANGE THE VALUE IN TOPIC COMBO BOX BY TYPING
  public valueChange (value: any): void
  {
    if (!value)
    {
      
      // IF VALUE CLEARED FROM TOPIC COMBO BOX, HIDE THE BELOW WIDGETS
      this.showForm = false;
    }
  }
  
  // THIS FUNCTION WILL BE CALLED WHEN WE CHANGE THE VALUE FROM OPTIONS IN TOPIC COMBO BOX
  public selectionChange (value: any): void
  {
    if (value && value.topic)
    {
      this.showForm = true;
      
      // RECORD EXIST IN DATABASE
      if (this.searchedTopic && this.searchedTopic.topic !== value.topic)
      {
        this.clear ();
        this.searchedTopic = value;
        this.getSelectedTopicData (this.searchedTopic.topic, this.searchedTopic.topic_id);
      }
    }
    else
    {
      this.clear ();
    }
  }
  
  // THIS FUNCTION WILL POPULATE DATA TO TITLE, IMAGE AND MAIN CONTENT WIDGET BY THE TOPIC SELECTED
  public getSelectedTopicData (searchedTopic, searchedTopicId): void
  {
    
    // CALLING THE API TO GET DATA BY THE TOPIC ID FROM DATABASE
    this.user.getHomeContent (searchedTopic).subscribe (data =>
    {
      
      // IF DATA FOUND IN DATABASE, APPEND THE DATA IN FORM TITLE, IMAGE AND MAIN CONTENT WIDGETS
      if (data && data['tab-home_id'] && data.topic_id === searchedTopicId)
      {
        this.showForm = true;
        this.tab_home_id = data['tab-home_id'];
        this.topicContent = data;
        this.image_name = data.svgname;
        this.homeTabForm.get ('title').setValue (this.topicContent.title);
        const topicBody = kendo.observable (
          {
            textareaValue: this.topicContent.body,
            minlength: 2
          });
        kendo.bind ($ ('#home-topic'), topicBody);
      }
    });
  }
  
  // THIS FUNCTION WILL BE CALLED ON TOPIC COMBOBOX TYPING FILTER OPERATION
  public filterChange (filter: any): void
  {
    
    // IF STATUS IS SELECTED, FILTER TOPIC COMBO BOX DATA SOURCE BY BOTH STATUS AND TYPED VALUE
    if (this.selectedStatus != '')
    {
      this.topicList = this.topicListSource.filter ((s) => s.topicstatus_id === this.selectedStatus.val);
      this.topicList = this.topicList.filter ((s) => s.topic.toLowerCase ().indexOf (filter.toLowerCase ()) !== -1);
    }
    else
    {
      this.topicList = this.topicListSource.filter ((s) => s.topic.toLowerCase ().indexOf (filter.toLowerCase ()) !== -1);
    }
  }
  
  // ON STATUS DROPDOWN CHANGE
  statusSelectionChange (value: any): void
  {
    
    // REMOVE TOPIC VALUE SELECTION FROM TOPIC COMBO BOX
    this.homeTabForm.get ('topic').setValue ('');
    
    // SELECTED VALUE
    this.selectedStatus = value;
    
    // IF SELECTED STATUS IS NOT BLKANK
    if (this.selectedStatus.val != '')
    {
      
      // FILTER THE TOPIC COMBO BOX DATASOURCE BY STATUS
      this.topicList = this.topicListSource.filter ((s) => s.topicstatus_id === this.selectedStatus.val);
      
      // IF UNCLAIMED STATUS SELECTED
      if (this.selectedStatus.val === 'UNC')
      {
        
        // BIND DATA TO TITLE, IMAGE AND CONTENT WIDGETS
        this.getSelectedTopicData ('UNC', '0');
        
        // SHOW TITLE, IMAGE AND CONTENT WIDGETS
        this.showForm = true;
        
        // DISABLE TOPIC COMBO BOX
        this.homeTabForm.get ('topic').disable ();
      }
      else
      {
        
        // HIDE TITLE, IMAGE AND CONTENT WIDGETS
        this.showForm = false;
        
        // ENABLE TOPIC COMBO BOX
        this.homeTabForm.get ('topic').enable ();
      }
    }
    else
    {
      
      // IF SELECTED STATUS IS BLANK: HIDE THE TITLE, IMAGE AND CONTENT WIDGET. MAKE TOPIC COMBO BOX DISABLED
      this.showForm = false;
      this.homeTabForm.get ('topic').disable ();
      this.topicList = this.topicListSource;
    }
  }
  
  // ON SUBMITTING THE FORM
  onSubmit (event)
  {
    
    // CHECK VALIDATION
    const editor = $ ('#editor').data ('kendoEditor');
    if (this.homeTabForm.invalid)
    {
      for (const key in this.homeTabForm.value)
      {
        this.homeTabForm.controls[key].markAsTouched ();
      }
      if (this.image_name.length === 0)
      {
        this.error_type = 'image_required';
      }
      
      if (editor.value ().length === 0)
      {
        this.diaplayMessage = true;
      }
      return;
    }
    
    if (this.image_name.length === 0)
    {
      this.error_type = 'image_required';
      return;
    }
    
    if (editor.value ().length === 0)
    {
      this.diaplayMessage = true;
      return;
    }
    
    const validator = $ ('#editor').data ('kendoValidator');
    
    // IF FORM IS VALID
    if (validator.validate ())
    {
      event.preventDefault ();
      const formData =
        {
          'title': this.homeTabForm.get ('title').value,
          'topic_id': this.homeTabForm.get ('topic').value,
          'topicstatus': this.homeTabForm.get ('topicstatus').value,
          'imageBase64': this.imageBase64,
          'image_name': this.image_name,
          'content': editor.value (),
          'tab_home_id': this.tab_home_id
        };
      
      // CALL DATA SUBMIT API
      this.user.updateHomeContent (formData).subscribe (result =>
      {
        
        // SHOW THE SUCCESS MESSAGE
        if (result.success && !this.tab_home_id)
        {
          
          // DISPLAY ADD SUCCESS MESSAGE IF EDIT ID NOT FOUND
          this.info_message = this.error_messages['MSG-MANAGE-HOME-DATA-ADDED-SUCCESSFULLY'];
        }
        else if (result.success && this.tab_home_id)
        {
          
          // DISPLAY UPDATE SUCCESS MESSAGE IF EDIT ID FOUND
          this.info_message = this.error_messages['MSG-MANAGE-HOME-DATA-UPDATED-SUCCESSFULLY'];
        }
        else
        {
          
          // DISPLAY ERROR MESSAGE
          this.info_message = this.error_messages['MSG-MANAGE-HOME-DATA-ERROR'];
        }
        return false;
      });
    }
  }
  
  // THIS FUNCTION WILL BE CALLED ON SELECTING AN IMAGE
  onImageChanged (event)
  {
    
    // CHECKING IF ANY FILE SELECTED
    if (event.target.files && event.target.files.length > 0)
    {
      const self = this;
      const file = event.target.files[0];
      const reader = new FileReader ();
      reader.readAsDataURL (file);
      reader.onload = () =>
      {
        
        // CHECK IF IMAGE IS IN SVG EXTENSION
        if (file.type == 'image/svg+xml')
        {
          this.error_type = '';
          const image = new Image ();
          image.src = reader.result.toString ();
          image.onload = function()
          {
            
            // CHECKING IMAGE SIZE WITH SITE VARIABLES
            if (file.size <= 15000 && image.width == image.height && image.width >= self.site_variables.homesvgmin && image.width <= self.site_variables.homesvgmax)
            {
              self.imageBase64 = reader.result.toString ();
              
              // IF UNCLAIMED STATUS SELECTED
              if (self.selectedStatus.val === 'UNC')
              {
                self.image_name = 'mainsvg_unclaimed.svg';
              }
              else
              {
                self.image_name = 'mainsvg_' + self.searchedTopic.topic_id + '.svg';
              }
            }
            else
            {
              
              // IMAGE SIZE NOT CORRECT
              self.error_type = 'image_size';
            }
            
          };
        }
        else
        {
          
          // IMAGE EXTENSION IS NOT SVG
          self.error_type = 'image_type';
        }
      };
    }
    
  }
  
  // IT WILL CLEAR THE FORM VALUES
  clear ()
  {
    this.homeTabForm.get ('title').setValue ('');
    this.info_message = '';
    this.image_name = '';
    this.imageBase64 = '';
    const topicBody = kendo.observable (
      {
        textareaValue: ''
      });
    this.tab_home_id = '';
    this.diaplayMessage = false;
    kendo.bind ($ ('#home-topic'), topicBody);
  }
}
