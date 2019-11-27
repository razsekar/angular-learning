import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeesList = [
    /* {id: 1, name: 'James Harton', department: 'Mechanical'},
    {id: 2, name: 'James Bond', department: 'Dance'},
    {id: 3, name: 'John Doe', department: 'General'},
    {id: 4, name: 'Donald Trump', department: 'Politician'}, */
  ]

  constructor(public _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeesList = this._employeeService.getEmployees();
  }

}
