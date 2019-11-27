import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  public message;
  constructor() { }

  ngOnInit() {
  }

  sendMessageToChild(message){
    this.message = message
  }
}
