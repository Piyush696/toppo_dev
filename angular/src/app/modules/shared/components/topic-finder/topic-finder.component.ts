import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { TopicService } from '../../services/topic.service';
import { SimilarWebCategory } from '../../models/similarWebCategory.model';
import { Topic } from '../../models/topic.model';
import { UserService } from '../../services/user.service';
import * as _ from 'lodash';

@Component({
	selector: 'app-topic-finder',
	templateUrl: './topic-finder.component.html',
	styleUrls: ['./topic-finder.component.css']
})
export class TopicFinderComponent implements OnInit {

	// `STATUS` WILL BE SET FROM PARENT COMPONENT WHERE TOPIC FINDER WILL BE ADDED AS CHILD COMPONENT
	@Input('status') status;

	// HOLDS CATEGORY THAT IS SELECTED IN `PIC CATEGORY` DROP DOWN
	_selectedCategory: SimilarWebCategory;

	// HOLDS ALL THE CATEGORIES FETCHED FROM DB
	public categoryList: Array<SimilarWebCategory>;
	public uniqCategoryList: Array<SimilarWebCategory>;

	// HOLDS ALL THE TOPICS FETCHED FROM SELECTED CATEGORY
	public topicList: any;

	// HOLDS SELECTED CATEGORY WISE FILTER TOPIC
	public filteredTopic: Array<Topic>;
	public autoCompletefilteredTopic: Array<Topic>;

	// HOLDS SELECTED TOPIC
	_selectedTopic: Topic;

	// HOLDS CURRENT USER VALUE
	user_id: number;
	user_role: string;

	// RETURN SELECTED TOPIC
	@Output() selectedTopic = new EventEmitter();

	constructor(private catService: CategoryService,	private user: UserService, private topicService: TopicService)
	{
	}

	ngOnInit()
	{
		// SET TO CURRENT USER ID AND TYPE
		this.user_id = this.user.getCurrentUserId();
		this.user_role = this.user.getCurrentUserRole();

		// GET ALL TOPIC
		this.catService.getSimilarWebCategory()
		.then((response) =>
		{
			this.categoryList = response;
			this.uniqCategoryList =  _.uniqBy(response, 'category');
			this.topicService.getAllTopic({'userId': this.user_id, 'userRole': this.user_role}).subscribe( result => {
				this.topicList = result;
			});
		})
		.catch((error) =>
		{
			console.error('StandaloneComponent : ngOnInit : getSimilarWebCategory : error : ', error);
		});
	}

	// WHEN ITEM FROM CATEGORY DROP DOWN IS SELECTED
	selectedCategory(item: SimilarWebCategory)
	{
		this.filteredTopic = [];
		this.autoCompletefilteredTopic = [];
		this._selectedCategory = item;
		if(this.topicList && this.topicList.length > 0 && this._selectedCategory && this._selectedCategory.similarwebcategory_id === '0')
		{
			this.filteredTopic = this.topicList;
			this.autoCompletefilteredTopic = this.filteredTopic || [];
		}
		else if(this.topicList && this.topicList.length > 0 && this._selectedCategory && this._selectedCategory.similarwebcategory_id)
		{
			var filteredCatId = this.categoryList.filter( ob => ob.category === this._selectedCategory.category);
			var array = _.map(filteredCatId, 'similarwebcategory_id');
			this.filteredTopic = this.topicList.filter( ob => array.indexOf(ob.similarwebcategory_id ) > -1);
			setTimeout(() => {
				this.autoCompletefilteredTopic = this.filteredTopic || [];
			})
		}
	}

	// WHEN ITEM FROM TOPIC DROP DOWN IS SELECTED
	getSelectedTopic(item: Topic)
	{
		this._selectedTopic = item;
		this.selectedTopic.emit({'subcategory': this._selectedCategory.subcategory, 'topic': this._selectedTopic});
	}

	// FILTER BY TOPIC
	handleTopicFilter(value)
	{
		this.autoCompletefilteredTopic = this.filteredTopic.filter((s) => s.topic.toLowerCase().indexOf(value.toLowerCase()) !== -1);
	}

}
