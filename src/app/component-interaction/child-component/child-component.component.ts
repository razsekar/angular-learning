import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() public parentMessage;
  @Output() public childMessage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendMessageToParent(message){
    this.childMessage.emit(message)
  }

}
