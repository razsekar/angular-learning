import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  //templateUrl: './pipes-demo.component.html',
  template: `
    <h1>Pipes</h1>
    <h3> {{name}} </h3>
    <h3> {{name | lowercase}} </h3>
    <h3> {{name | uppercase}} </h3>
    <h3> {{name | titlecase}} </h3>
  `,
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  public name = 'CallHealth'
  public currentDate = new Date()
  public value = 5.678

  constructor() { }

  ngOnInit() {
  }

}

/* <h3> {{name | slice:4}} </h3>
    <h3> {{name | slice:4:8}} </h3>

    <h3> {{value | number:'1.2-3'}} </h3>
    <h3> {{value | number:'2.3-3'}} </h3>
    <h3> {{value | number:'3.4-4'}} </h3>
    <h3> {{value | number:'3.1-2'}} </h3>

    <h3> {{value | currency}} </h3>
    <h3> {{value | currency:'INR'}} </h3>

    <h3> {{currentDate}} </h3>
    <h3> {{currentDate | date: 'short'}} </h3>
    <h3> {{currentDate | date: 'medium'}} </h3>

    <h3> {{currentDate | date: 'shortDate'}} </h3>
    <h3> {{currentDate | date: 'shortTime'}} </h3> */
