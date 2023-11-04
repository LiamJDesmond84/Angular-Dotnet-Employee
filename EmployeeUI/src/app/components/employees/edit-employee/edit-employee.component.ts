import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  editEmployeeRequest: Employee = {
    id: "",
    name: "",
    email: "",
    phone: 0,
    salary: 0,
    department: ""
  }

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

  public editEmployee() {

    this.employeeService.editEmployee(this.editEmployeeRequest)
    .subscribe({
      next: (employee) => {
        console.log(employee);
        
      },
      error: (response) => {
        console.log(response.error);
        
      }
    })
  }
}
