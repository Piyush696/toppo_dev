import {Component, OnInit} from '@angular/core';
import '@ckeditor/ckeditor5-build-classic/build/translations/de';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SimpleuploadPlugin from 'ckeditor5-simple-upload/src/simpleupload'

// ADDING HTML AND CSS FILES TO THIS COMPONENT
@Component
({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

// COMPONENT CLASS NAME
export class EventsComponent
{
  // VARIABLE DECELERATIONS
  public Editor = ClassicEditor;
  public isDisabled = false;
  public editorData =
    `<p>Getting used to an entirely different culture can be challenging.
While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person.
You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>`;
  public componentEvents: string[] = [];
  
}
