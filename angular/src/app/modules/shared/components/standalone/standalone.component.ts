import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.css']
})
export class StandaloneComponent implements OnInit {
  
  status: Array<string> = [
    'TOP',
    'TSV',
    'LIV'
  ];

  constructor()
  {
  
  }

  ngOnInit()
  {
  
  }
}
