import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  //templateUrl: './ng-switch-directive.component.html',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'" [style.color] = "'red'">You picked Red Color </div>
      <div *ngSwitchCase="'green'" [style.color] = "'green'">You picked Green Color </div>
      <div *ngSwitchCase="'orange'" [style.color] = "'orange'">You picked Orange Color </div>
      <div *ngSwitchDefault>No color is picked</div>
    </div>

    <button (click)="pickColor('red')">
      Red
    </button>
    <button (click)="pickColor('green')">
      Green
    </button>
    <button (click)="pickColor('orange')">
      Orange
    </button>
    <button (click)="pickColor()">
      Clear
    </button>
  `,
  styleUrls: ['./ng-switch-directive.component.css']
})
export class NgSwitchDirectiveComponent implements OnInit {

  public color = 'red';

  constructor() { }

  ngOnInit() {
  }

  pickColor(selectedColor){
    this.color = selectedColor
  }

}
