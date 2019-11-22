import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  /* template: `
    <h1 style="display:none">Structural Directives</h1>

    
    <h3 *ngIf="displayName; then thenBlock else elseBlock">CallHealth</h3>

    <ng-template #thenBlock>
      <h3>CallHealth Service Pvt Ltd</h3>
    </ng-template>

    <ng-template #elseBlock>
      The name is hidden.
    </ng-template>

  `, */
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {
  public displayName = true;
  constructor() { }

  ngOnInit() {
  }

}
/* 
<h3 *ngIf = "displayName">CallHealth</h3>
<h3 *ngIf = "displayName; else elseBlock">CallHealth</h3>
    <h3 *ngIf = "displayName; then thenBlock; else elseBlock">CallHealth</h3>

    <ng-template #thenBlock>
      <h3>CallHealth</h3>
    </ng-template>

    <ng-template #elseBlock>
      <h4>Company name is hidden</h4>
    </ng-template> */