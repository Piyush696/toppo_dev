import { Component, OnInit } from '@angular/core';
import { TabTypeService } from '../../../shared/services/tabtype.service';

@Component({
	selector: 'app-manage-topic-tab-content',
	templateUrl: './manage-topic-tab-content.component.html',
	styleUrls: ['./manage-topic-tab-content.component.css']
})
export class ManageTopicTabContentComponent implements OnInit {

	//HOLDS SELECTED TOPIC DETAILS
	public selectedTopic: any;
	public selected: number = 0;
	public list: any;

	//HOLDS TAB LIST
	public tabtypes: any;

	//HOLDS BOOLEAN VALUE TO HIDE/SHOW SUB TITLE
	public isEditSubTab: boolean = false;

	public listItems: Array<string> = ['Baseball', 'Basketball', 'Cricket', 'Field Hockey', 'Football', 'Table Tennis', 'Tennis', 'Volleyball'];
	public value: any = ['Baseball'];


	constructor(private tabservice: TabTypeService) { }

	ngOnInit() {
	}

	// GET SELECTED CATEGORY AND TOPIC
	getTopic(selectedTopic)
	{
		if(selectedTopic && selectedTopic.topic.length > 0)
		{
			this.selectedTopic = selectedTopic;
			this.list = [];
			this.getTabTypes(this.selectedTopic.topic);
		}
	}

	// GET TAB BY TOPIC
	getTabTypes(topic)
	{
		// GET TAB TYPES
		this.tabservice.getTabTypes(topic).subscribe( data =>
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
			if(this.tabtypes && this.tabtypes.length > 0 && this.tabtypes[0].activetab && this.tabtypes[0].activetab.length === 0)
			{
				this.tabtypes.map((tab, index) => {
					if(tab.description === "Blogs")
					{
						tab.value = false;
					}
					else
					{
						tab.value = true;
						if (tab && tab.children.length > 0)
						{
							tab.children[0].value = true;
						}
					}
				});
			}

			// SET VALUE IN TREE ACCORDING TO DATABASE ACTIVE TAB
			this.tabtypes.map((tab, index) => {
				if(tab && tab.children.length > 0)
				{
					tab.children.map((child) => {
						if(this.tabtypes[0].activetab.indexOf(child.tabname) > -1)
						{
							child.value = true;
						}
					})
				}
			})
		});

	}

	editSubTab(tabIndex)
	{
		this.isEditSubTab = !this.isEditSubTab;
	}
}
