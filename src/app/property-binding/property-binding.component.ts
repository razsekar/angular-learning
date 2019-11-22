import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  //templateUrl: './property-binding.component.html',
  template: `
  <h1>Property Binding</h1>
<input type="text" value="Callhealth" />
`,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  public myId = 'testId'
  constructor() { }

  ngOnInit() {
  }

}


/* <!-- <input [id]="myId" type="text" value="Callhealth" />
<input id="{{myId}}" type="text" value="Callhealth" />
<input disabled="false" id="{{myId}}" type="text" value="Callhealth" /> -->
<input [disabled]="true" type="text" value="Callhealth" />
<input bind-disabled="true" type="text" value="Callhealth" />
<!-- $0.getAttribute("value")
$0.value --> */