import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public menuItems: any = [];
  
  constructor() {
    this.menuItems = [
      {url: 'interpolation', text: 'Interpolation'},
      {url: 'property-binding', text: 'Property Binding'},
      {url: 'class-binding', text: 'Class Binding'},
      {url: 'style-binding', text: 'Style Binding'},
      {url: 'event-binding', text: 'Event Binding'},
      {url: 'template-reference-variables', text: 'Template reference variables'},
      {url: 'two-way-binding', text: 'Two way binding'},
      {url: 'ng-if-directive', text: '*ngIf Directive'},
      {url: 'ng-switch-directive', text: '*ngSwitch Directive'},
      {url: 'ng-for-directive', text: '*ngFor Directive'},
      {url: 'component-interaction', text: 'Component Interaction'},
      {url: 'pipes', text: 'Pipes'}
    ]
  }

  isCurrent(url){
    let currentUrl = window.location.href;
    return (currentUrl.indexOf(url)!=-1)? true : false;
  }

  ngOnInit() {
  }

}
