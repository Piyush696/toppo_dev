import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Sentencer } from '../../shared/services/sentencer.service';
import { _ } from 'underscore';
import { first } from 'rxjs/operators';
import { Topic } from './topic';
import { Topicsynonym_group } from './topic';
import { Topicsynonym_row } from './topic';
import { Topicsynonym_term } from './topic';

@Component({
  selector: 'app-phrasegen',
  templateUrl: './phrasegen.component.html',
  styleUrls: ['./phrasegen.component.css']
})
export class PhrasegenComponent implements OnInit {

    public myForm: FormGroup;
    public sentenceForm: FormGroup;
    public phraseform: FormGroup;
    pos: any;
    stop_words = [
	    'about', 'after', 'all', 'also', 'am', 'an', 'and', 'another', 'any', 'are', 'as', 'at', 'be',
	    'because', 'been', 'before', 'being', 'between', 'both', 'but', 'by', 'came', 'can',
	    'come', 'could', 'did', 'do', 'each', 'for', 'from', 'get', 'got', 'has', 'had',
	    'he', 'have', 'her', 'here', 'him', 'himself', 'his', 'how', 'if', 'in', 'into',
	    'is', 'it', 'like', 'make', 'many', 'me', 'might', 'more', 'most', 'much', 'must',
	    'my', 'never', 'now', 'of', 'on', 'only', 'or', 'other', 'our', 'out', 'over',
	    'said', 'same', 'see', 'should', 'since', 'some', 'still', 'such', 'take', 'than',
	    'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'those',
	    'through', 'to', 'too', 'under', 'up', 'very', 'was', 'way', 'we', 'well', 'were',
	    'what', 'where', 'which', 'while', 'who', 'with', 'would', 'you', 'your',
	    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
	    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '$', '1',
	    '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', ''
	];
    searched: boolean;
	distinctwords:any;
	validwords: any;
	resultwords: any;
	row1words: any;
	row2words: any;
	row3words: any;
    exact_match: any;
    topic_found: any;
    current_topics: any;
    chosen_topic: any;
    topic_chosen: any;
    expression: any;
	public topic: Topic[];
    public topicsynonym_group: Topicsynonym_group[];
    public topicsynonym_row: Topicsynonym_row[];
	public topicsynonym_term: Topicsynonym_term[];


    constructor(private _fb: FormBuilder, private sentencer: Sentencer) 
    {
        this.searched = false;
        this.topic_chosen = false;
		this.topic = 
    	[
	    	{ topic_id: '1', topic: 'bike', link: 'go to bike link' },
	    	{ topic_id: '2', topic: 'buying home', link: 'go to buying home link' },
            { topic_id: '3', topic: 'electric bike', link: 'go to electric bike link' },
	    	{ topic_id: '4', topic: 'how to build a house', link: 'how to build a house topic' }
        ];

        this.topicsynonym_group = 
        [    
            { topic_id: '1', synonym_group_id: '1' },
            { topic_id: '1', synonym_group_id: '2' },
            { topic_id: '2', synonym_group_id: '1' }
        ];

        this.topicsynonym_row = 
        [    
            { topic_id: '1', synonym_group_id: '1', synonym_row_id:'1', synonym_row_operator: 'OR'  },
            { topic_id: '1', synonym_group_id: '1', synonym_row_id:'2', synonym_row_operator: 'OR'  },
            { topic_id: '1', synonym_group_id: '2', synonym_row_id:'1', synonym_row_operator: 'OR'  },
            { topic_id: '2', synonym_group_id: '1', synonym_row_id:'1', synonym_row_operator: 'OR'  }
        ];

    	this.topicsynonym_term = 
    	[    
            { topic_id: '2', synonym_group_id: '1', synonym_row_id:'1', synonym_term: 'build', synonym_term_operator: 'OR'  },
            { topic_id: '2', synonym_group_id: '1', synonym_row_id:'1', synonym_term: 'building', synonym_term_operator: 'OR'  },
            { topic_id: '2', synonym_group_id: '1', synonym_row_id:'2', synonym_term: 'house', synonym_term_operator: 'OR'  },
            { topic_id: '4', synonym_group_id: '1', synonym_row_id:'2', synonym_term: 'home', synonym_term_operator: 'OR'  },
            { topic_id: '4', synonym_group_id: '1', synonym_row_id:'2', synonym_term: 'house', synonym_term_operator: 'OR'  },
            { topic_id: '2', synonym_group_id: '1', synonym_row_id:'2', synonym_term: 'home', synonym_term_operator: 'OR'  },
            { topic_id: '1', synonym_group_id: '2', synonym_row_id:'1', synonym_term: 'price', synonym_term_operator: 'OR'  },
            { topic_id: '2', synonym_group_id: '2', synonym_row_id:'1', synonym_term: 'price', synonym_term_operator: 'OR'  },
            { topic_id: '2', synonym_group_id: '2', synonym_row_id:'1', synonym_term: 'buy', synonym_term_operator: 'OR'  },
            { topic_id: '2', synonym_group_id: '2', synonym_row_id:'1', synonym_term: 'buying', synonym_term_operator: 'OR'  },
            { topic_id: '2', synonym_group_id: '2', synonym_row_id:'1', synonym_term: 'cost', synonym_term_operator: 'OR'  },
            { topic_id: '1', synonym_group_id: '2', synonym_row_id:'1', synonym_term: 'cost', synonym_term_operator: 'OR'  },
            { topic_id: '3', synonym_group_id: '1', synonym_row_id:'1', synonym_term: 'bicycle', synonym_term_operator: 'OR'  },
            { topic_id: '3', synonym_group_id: '1', synonym_row_id:'1', synonym_term: 'electricity', synonym_term_operator: 'OR'  }
        ];

    }

	get f() { return this.sentenceForm.controls; }
	get rowform() { return this.myForm.controls; }

    ngOnInit() 
    {
    	this.sentenceForm = this._fb.group(
    	{
	      sentenceInput: [null, [Validators.required]]
    	});

         this.phraseform = this._fb.group({
              RowData: this._fb.array([this.addRows()])
            });

        // this.chosen_topic = {topic_id: "2", topic: "buying home", link: "go to buying home link"};
        // this.topic_chosen = true;
    }


    addRows() {
        let group = this._fb.group({
          rowOp: [''],
          wordData: this._fb.array([])
        });
        this.addWord(group.controls.wordData)
        return group;
    }

    addSynonymGroup() {
        const control: FormArray = this.phraseform.get('RowData') as FormArray;
        control.push(this.addRows());
    }

    addWord(row:any) {
        let group = this._fb.group({
          wordOp:[''],
          word_inp: ['']
        })
        row.push(group)
    }

    removeWord(row, index) { 
        row.controls.wordData.removeAt(index)
    }


    getControls(frmGrp: FormGroup, key: string) 
    {
        return (<FormArray>frmGrp.controls[key]).controls;
    }

    lowerCaseAllWords(string) 
    {
        return string.replace(/\w\S*/g, function (word) 
        {
            return word.toLowerCase();
        });
    }

    saveForm(event)
    {
        event.preventDefault();

        if(this.phraseform.invalid)
        {
            return;
        }

        var formData = this.phraseform.value;
        this.expression ="";
        let vm = this;
        _.each(formData.RowData, function(row){
               if(row.rowOp != "")  vm.expression += " "+row.rowOp+" ";
               vm.expression += "(";
               _.each(row.wordData, function(word){
                       if(word.wordOp != "")  vm.expression += " "+word.wordOp+" ";
                       vm.expression += word.word_inp;
               });
               vm.expression += ")";

        });
        console.log(vm.expression);
    }

    OnSubmit(event) 
	{
        event.preventDefault();

		// stop here if form is invalid
        if (this.sentenceForm.invalid) 
        {
            return;
        }

        var inputSentence = this.lowerCaseAllWords(this.f.sentenceInput.value);
        var result = _.where(this.topic, {topic: inputSentence});
        this.searched= true;
        if(result.length == 0) 
        {
            this.exact_match = false;
            console.log("there is no exact match");
            var inputArray = inputSentence.split(" ");
            inputArray = _.difference(inputArray, this.stop_words);
            inputArray =  _.uniq(inputArray);
            console.log(inputArray);
            var filtered =_.filter
                            (
                                this.topicsynonym_term,   
                                function(i)
                                { 
                                    return this.values.indexOf(i.synonym_term) > -1; 
                                },
                                { "values": inputArray }  
                            );

            if(filtered.length == 0)
            {
                console.log("no related topic was found");
                this.topic_found = false;
            }
            else 
            {
               this.topic_found = true;
               console.log(filtered);

                var plucked = _.uniq(_.pluck(filtered, 'topic_id'));
                let vm = this;

                this.current_topics = 
                            (
                                _.filter
                                (
                                    this.topic,
                                    function(i)
                                    {
                                        return this.values.indexOf(i.topic_id) > -1;
                                    },
                                    {"values" : plucked}
                                )
                            );
            }
        }
        else
        {
            this.exact_match = true;
            this.current_topics = result;
        }
        console.log(this.current_topics);
    }

    chooseTopic(event, topicId)
    {
        this.topic_chosen = true;
        var chosen_topic_id = topicId;
        console.log(chosen_topic_id);

        this.chosen_topic = _.where(this.current_topics, {topic_id: chosen_topic_id})[0];
        console.log(this.chosen_topic);
    }


}
