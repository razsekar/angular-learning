import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {id: 1, name: 'James Harton', department: 'Mechanical'},
      {id: 2, name: 'James Bond', department: 'Dance'},
      {id: 3, name: 'John Doe', department: 'General'},
      {id: 4, name: 'Donald Trump', department: 'Politician'},
    ]
  }
}
