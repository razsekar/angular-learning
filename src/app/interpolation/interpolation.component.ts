import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  //templateUrl: './interpolation.component.html',
  template: `<h1>Interpolation / Data binding</h1>
  <h3>Welcome {{company.length}}</h3>
  <h3>Welcome {{company.toUpperCase()}}</h3>
  <h3>Sum of 5 + 10 is {{5 + 10}}</h3>
  <p>{{currentURL}}</p>


  `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public company = 'CallHealth'
  public currentURL = window.location.href
  constructor() { }

  ngOnInit() {
    /* <h3>Welcome {{company}}</h3>
  <h3>Welcome {{company + ' - IHS'}}</h3>
  <h3>{{2+2}}</h3> <!-- Evaluates JavaScript -->
  <h3>{{company.length}}</h3> <!-- Evaluates Javascript properties -->
  <h3>{{company.toUpperCase()}}</h3> <!-- Evaluates Javascript methods -->
  <!-- <h3>{{ company = 'HDFC' }}</h3> -->
  <!-- <h3>{{ window.location.href }}</h3> --> */
  }

}
