import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  //templateUrl: './class-binding.component.html',
  template: `<h1>Classs Binding</h1>
  
  <h3 class="text-special" [class]="'text-success'">Angular CLass apply</h3>
  <h3 [class.text-success]="false">CallHealth..!!</h3>

  <h3 [class]="hasError ? errorClass : successClass">CallHealth..!!</h3>

  <h3 [ngClass]="{'text-success': false, 'text-special': true}">CallHealth..!!</h3>
  `,
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public successClass = 'text-success'
  public warningClass = 'text-warning'
  public errorClass = 'text-danger'

  public hasError = false
  public isSpecial = true

  public messageClass = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }

  /* <h3 class="text-success">CallHealth..!!</h3>
  <h3 [class]="'text-success'">CallHealth..!!</h3>
  <h3 [class]="warningClass">CallHealth..!!</h3> */
  
  constructor() { }

  ngOnInit() {
  }
  /* <h3 class="text-warning">CallHealth..!!</h3>
  <h3 [class]="successClass">CallHealth..!!</h3>
  <h3 class="red" [class]="successClass">CallHealth..!!</h3>
  <h3 [class.text-danger]="hasError">CallHealth..!!</h3>
  
  <h3 [ngClass]="messageClass">CallHealth..!!</h3> */
}
