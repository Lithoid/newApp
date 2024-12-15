import { Component, Input, OnInit,ViewEncapsulation,ViewChild,ElementRef,ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {type: string,name:string,content:string};

  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;


  constructor() { }

  ngOnInit(): void {
    console.log(this.header.nativeElement.textContent);

    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log("Test"+this.header.nativeElement.textContent);
  }
}
