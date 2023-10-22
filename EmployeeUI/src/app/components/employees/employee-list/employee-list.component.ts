import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [
    {
      "id": "1",
      "name": "Bob",
      "email":"bob@test.com",
      "phone": 6195553434,
      "salary": 78888,
      "department": "security"
    },
    {
      "id": "2",
      "name": "Karl",
      "email":"karl@test.com",
      "phone": 61955534345,
      "salary": 50000,
      "department": "customer service"
    },
    {
      "id": "3",
      "name": "Sam",
      "email":"same@test.com",
      "phone": 6195553784,
      "salary": 70000,
      "department": "accounting"
    }
    ,{
      "id": "3",
      "name": "Steve",
      "email":"steve@test.com",
      "phone": 6195551134,
      "salary": 80000,
      "department": "engineering"
    }
  ];

  constructor() {}

  ngOnInit(): void {



    this.employees.push()

  }

}
