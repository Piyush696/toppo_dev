import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './searchmain.component.html',
  styleUrls: ['./searchmain.component.css']
})
export class SearchComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit()
    {

    }
}
