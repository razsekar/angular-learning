import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  //templateUrl: './ng-for-directive.component.html',
  template: `
    <h3>ngFor</h3>

    <div *ngFor="let color of colors; first as f, last as l, even as e">
      <h5 [ngClass]="styleMylist(f, e, l)">Even: {{e}} | Color: {{color}}</h5>
    </div>


  `,
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {

  public colors = ['red', 'green', 'yellow', 'orange']

  

  constructor() { }

  ngOnInit() {
  }

  styleMylist(firstElement, evenElement, lastElement){

    let styleItem = {
      'rounded-top': false,
      'rounded-bottom': false,
      'even': false,
      'odd': false
    }

    console.log(firstElement, evenElement, lastElement);
    styleItem['rounded-top'] = firstElement
    styleItem['rounded-bottom'] = lastElement
    styleItem['even'] = evenElement
    styleItem['odd'] = !evenElement
    console.log(styleItem);
    return styleItem
  }

}

/* 
<div *ngFor = "let color of colors; index as i; first as f, last as l, even as e">
      <h3>Index-{{i}} Color-{{color}} First - {{f}} Last - {{l}} Even - {{e}} </h3>
    </div> */