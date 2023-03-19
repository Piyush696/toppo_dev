import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import { ForbiddenWords} from '../services/forbidden.service';
import { MessageService } from '../services/message.service';
@Directive({
	selector: '[forbiddenWord]'
})
export class ForbiddenWordDirective implements OnInit {

	@Input() public input: any;
	stringValue: string = '';
	forbidden_words: any;
	error_messages: any;
	private element: HTMLInputElement;
	constructor(el: ElementRef, private Forbidden: ForbiddenWords, private Message: MessageService) {
		this.element = el.nativeElement;
		el.nativeElement.addEventListener('input', this.changeData.bind(this));
	}

	changeData(event) {
		if(event.data != null)
		{
			let isFound = false;
			this.stringValue += event.data;
			let subString = this.stringValue.split(" ");
			subString.forEach(str => {
				if(str !== '' && this.forbidden_words.indexOf(str) > -1)
				{
					isFound = true;
				}
			});

			if(isFound)
			{
				isFound= false;
				console.log("forbidden word found");
				var isMsgShow = false;
				this.element.parentElement.classList.add('forbiddenWord');
				var children = this.element.parentElement.children;
				for (var i =0; i < children.length; i++)
				{
					if (children[i].getAttribute('id') === 'forbidden-error-msg')
					{
						isMsgShow = true;
					}
				}
				if(!isMsgShow)
				{
					var errorDiv = <HTMLElement>document.createElement('div');
					errorDiv.classList.add('alert-danger');
					errorDiv.setAttribute('id', 'forbidden-error-msg');
					var newContent = document.createTextNode(this.error_messages['FORBIDDEN-WORD-ERROR']);
					errorDiv.appendChild(newContent);
					this.element.parentElement.appendChild(errorDiv);
				}
			}
			else
			{
				this.element.parentElement.classList.remove('forbiddenWord');
				var errorDiv = document.getElementById("forbidden-error-msg");
				if(errorDiv !== null) errorDiv.parentNode.removeChild(errorDiv);
			}
		}
		else
		{
			this.stringValue = this.stringValue.slice(0, -1);
		}
		console.log(this.stringValue);
	}

	async ngOnInit() {
		this.forbidden_words= await this.Forbidden.getForbiddenWords();
		this.error_messages= await this.Message.getMessages();
	}
}
