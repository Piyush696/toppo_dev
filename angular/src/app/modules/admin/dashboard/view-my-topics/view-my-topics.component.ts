import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { UserService } from '../../../shared/services/user.service';
import { AlertService } from '../../../shared/services/alert.service';
import { MessageService } from '../../../shared/services/message.service';
import { TopicService } from '../../../shared/services/topic.service';

@Component({
	selector: 'app-view-my-topics',
	templateUrl: './view-my-topics.component.html',
	styleUrls: ['./view-my-topics.component.css']
})
export class ViewMyTopicsComponent implements OnInit, OnChanges {
	@Input() role_code;

	// USED FOR FORM
	addTopicForm: FormGroup;
	public formtopicTypes: any;
	public formtopicCategories: any;
	public formtopicSubCategories: any;
	public formtopicStatus: any;
	public resetDisabled = true;
	public addClicked= false;
	dispaly_success_message="";
	error_messages = {};
	user_id: number;
	user_role: string;

	// USED FOR GRID PAGINATION
	public pageSize: number;
	public state: State = {
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
	public filterOptions = [];



	constructor(
		private formBuilder: FormBuilder,
		private user: UserService,
		private message: MessageService,
		private alertService: AlertService,
		private topic: TopicService
		) { }

	ngOnChanges(changes: SimpleChanges) {
		// RESET THE FORM IF ROLE IS CHANGED
		for (let propName in changes) {
			let diff = changes[propName];
			let current  = JSON.stringify(diff.currentValue);
			let previous = JSON.stringify(diff.previousValue);
			if(previous && current && previous !== current)
			{
				this.resetForm();
			}
		}
	}

	async ngOnInit()
	{
		// CREATING REACTIVE FORM
		this.addTopicForm = this.formBuilder.group(
		{
			user_id: '',
			user_role: '',
			newtopic: ['',[Validators.required]],
			newtopictype: ['',[Validators.required]],
			newtopiccategory: ['',[Validators.required]],
			newtopicsubcategory: ['',[Validators.required]],
			newtopicstatus: ['',[Validators.required]]

		});

		// SET TO CURRENT USER ID AND TYPE
		this.user_id = this.user.getCurrentUserId();
		this.user_role = this.user.getCurrentUserRole();
		this.pageSize = this.user.getItemsPerPage();
		this.state.take = this.pageSize;

		// GETTING TOPIC TYPES
		this.topic.getTopicTypes().subscribe( result =>
		{
			this.formtopicTypes = result;
			this.gridtopicTypes = result;
		});

		// GET TOPIC CATEGORIES
		this.topic.getTopicCategories().subscribe( result =>
		{
			this.formtopicCategories = result;
			this.gridtopicCategories = result;
		});

		// GET TOPIC SUB CATEGORIES
		this.topic.getTopicSubCategories('').subscribe( result =>
		{
			this.formtopicSubCategories = result;
		});

		// GET TOPIC STATUS LIST
		this.topic.getTopicStatus({userRole: this.role_code}).subscribe( result =>
		{
			this.formtopicStatus = result;
			this.gridtopicStatus = result;
		});

		// FILTERING DATA GRID
		this.addTopicForm.valueChanges.subscribe(val =>
		{
			this.state.skip = 0;
			this.filterOptions=[];
			var topic = val.newtopic;
			if(topic!='' && topic.length>0)
			{
				this.filterOptions.push({field: "topic",operator: "contains",value: topic});
			}

			var topictype = val.newtopictype;
			if(topictype!='')
			{
				this.filterOptions.push({field: "topictype",operator: "equals",value: topictype});
			}

			var topiccategory = val.newtopiccategory;
			if(topiccategory!='')
			{
				this.filterOptions.push({field: "topiccategory",operator: "contains",value: topiccategory});
			}

			var topicsubcategory = val.newtopicsubcategory;
			if(topicsubcategory!='')
			{
				this.filterOptions.push({field: "topicsubcategory",operator: "contains",value: topicsubcategory});
			}

			var topicstatus = val.newtopicstatus;
			if(topicstatus!='')
			{
				this.filterOptions.push({field: "topicstatus",operator: "equals",value: topicstatus});
			}

			if(this.filterOptions.length>0)
			{
				this.resetDisabled=false;
				this.getReservedTopics();
			}
			else
			{
				this.resetDisabled=true;
				this.gridData=false;
			}
			if(topic!='')
			{
				this.resetDisabled=false;
			}
		});

		// GETTING TOPIC SUB CATEGORIES ON CHOOSING CATEGORY IN ADD TOPIC FORM
		this.addTopicForm.get('newtopiccategory').valueChanges.subscribe(val =>
		{
			this.topic.getTopicSubCategories(val).subscribe( result =>
			{
				this.formtopicSubCategories = result;
			});
		});

		// GETTING ERROR MESSAGES
		this.error_messages = await this.message.getMessages();
	}

	// MAIN FUNCTION TO CALL SERVICE AND BINDING DATA TO DATA GRID
	public getReservedTopics()
	{
		if(this.filterOptions.length>0)
		{
			this.state.filter= {logic: "and",filters: this.filterOptions};
		}
		this.topic.getReservedTopics(this.state, this.user_id, this.role_code).subscribe( result =>
		{
			if(result.count>0)
			{
				this.gridData = {
					data: result.topics,
					total: result.count
				};
			}
			else
			{
				this.gridData=false;
			}

		});
	}

	// HANDLING CATEGORY CHANGES IN GRID EDIT
	public handleCategoryChange(value)
	{
		this.topic.getTopicSubCategories(value).subscribe( result =>
		{
			this.defaultItem = result[0];
			this.gridtopicSubCategories = result;

		});
	}

	public changePager(value)
	{
		this.state.take=value;
		this.state.skip=0;
		this.getReservedTopics();
		this.user.updateItemsPerPage(this.user_id,this.pageSize);
	}

	// HANDLING STATE CHANGE IN DATA GRID
	public dataStateChange(state: DataStateChangeEvent)
	{

		if(this.pageSize!=state.take)
		{
			this.pageSize=state.take;
			this.user.updateItemsPerPage(this.user_id,this.pageSize);
		}
		this.state = state;
		this.getReservedTopics();
	}

	// HANDLING CANCEL BUTTON CLICK
	public cancelHandler({sender, rowIndex})
	{
		this.closeEditor(sender, rowIndex);
	}

	private closeEditor(grid, rowIndex = this.editedRowIndex)
	{
		grid.closeRow(rowIndex);
		this.editedRowIndex = undefined;
		this.editedTopic = undefined;
	}

	// RESET FORM
	public resetForm()
	{
		this.addTopicForm.reset({newtopic:'',newtopictype:'',newtopiccategory:'',newtopicsubcategory:'',newtopicstatus:''});
		this.gridData=false;
		this.addClicked=false;
		this.dispaly_success_message = '';
	}

	get f() { return this.addTopicForm.controls; }

}
