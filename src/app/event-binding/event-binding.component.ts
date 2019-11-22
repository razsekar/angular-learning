import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  //templateUrl: './event-binding.component.html',
  template: `<div style="width: 400px; height: 400px; background: #f6f6f6" (mousemove)="logMouseMove($event)">
  <h1>Event Binding</h1>
  {{greetingText}}
  <button (click)="clickHandler($event)">Greet1</button>
  <button (click)="greetingText = 'Hello How are you'">Greet2</button></div>`,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public greetings = ''
  public greetingText = ''
  constructor() { }

  ngOnInit() {
  }

  clickHandler(e){
    this.greetingText = 'Hey.. I am here..'
    console.log('Hi.. my event is working..')
    console.log(e)
    //this.greetings = 'Welcome to Angular8'
    //this.greetings = event.type
  }

  logMouseMove(e){
    console.log(e.clientX, e.clientY)
  }

  /* <button (click)="greetings = 'Welcome to CallHealth..!!'">Greet</button>
  <h3>{{greetings}}</h3> */

}
