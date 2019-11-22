import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  //templateUrl: './component-interaction.component.html',
  template: `
    <div>{{parentData}}</div>
    <button (click)="sendMessage()">Send message</button>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input() public parentData;

  public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  sendMessage(){
    this.childEvent.emit('This message is from child');
  }

}
