import {Component, OnInit, HostListener, Output, EventEmitter} from '@angular/core';
import {PDFDocumentProxy} from 'ng2-pdf-viewer';

// ADDING HTML AND CSS FOR THIS COMPONENT
@Component
({
  selector: 'app-white-paper',
  templateUrl: './white-paper.component.html',
  styleUrls: ['./white-paper.component.css']
})

// COMPONENT CLASS NAME
export class WhitePaperComponent implements OnInit
{
  @Output () loginEvent = new EventEmitter ();
  totalPages: any;
  src = "assets/Topicopolis updated_12.pdf";
  tabHeight: any;
  
  // FUNCTION EXECUTED WHEN PAGE RESIZE
  @HostListener ('window:resize', ['$event'])
  onResize ()
  {
    // CALLED UPDATE ITEM FUNCTION
    this.updatePageItem ();
  }
  
  // FUNCTION EXECUTED FIRST WHEN COMPONENT LOADED
  ngOnInit ()
  {
    this.updatePageItem ();
  }
  
  // RESPONSIVE HANDLING FOR TAB HEIGHT
  updatePageItem ()
  {
    // DECLARING VARIBALE FOR HEIGHT
    var windowHeight = window.innerHeight;
    this.tabHeight = (windowHeight - 290) + 'px';
    console.log (this.tabHeight)
  }
  
  //TOTAL PAGES IN PDF
  afterLoadComplete (pdf: PDFDocumentProxy)
  {
    this.totalPages = pdf.numPages;
    console.log (this.totalPages)
  }
  
  //CURRENT PAGE IN PDF
  onPageChange (page: number)
  {
    console.log ('onPageChange');
    console.log (page);
    
    // IF TOTAL PAGES IS CURRENTPAGE
    if (this.totalPages == page)
    {
      console.log ('Pages Ended')
      this.loginEvent.emit (true)
    }
  } 
}
