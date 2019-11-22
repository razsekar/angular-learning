import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  //templateUrl: './two-way-binding.component.html',
  template: `
    <h1>Two way binding</h1>
    <input type="text" />
    <input type="text" [(ngModel)]="name" />
    {{name}}
  `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

//<input type="text" [(ngModel)] />     //[()] - Banana in the box
