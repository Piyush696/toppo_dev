import { Component  } from '@angular/core';
import { ForbiddenWords } from './modules/shared/services/forbidden.service';
import { MessageService } from './modules/shared/services/message.service';
import { SiteVariableService } from './modules/shared/services/sitevariable.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent 
{
  	title = 'Topicopolis';

  	constructor( private Message: MessageService, private Forbidden: ForbiddenWords, private Variable: SiteVariableService) 
  	{ 

  	}

  	async ngOnInit() 
  	{
        await this.Forbidden.setWords();
        await this.Message.setMessages();
        await this.Variable.setSiteVariables();
        
  	}
} 
