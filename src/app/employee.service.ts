import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  /* getEmployees(){
    return [
      {id: 1, name: 'James Harton', department: 'Mechanical'}, 
      {id: 2, name: 'James Bond', department: 'Dance'},
      {id: 3, name: 'John Doe', department: 'General'},
      {id: 4, name: 'Donald Trump', department: 'Politician'},
    ]
  } */

  getEmployees(){
    return this._http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  createEmployee(params){
    //let params = {"name":"RajaSekhar","salary":"1119123","age":"33"};
    return this._http.post('http://dummy.restapiexample.com/api/v1/create', params);
  }
}
