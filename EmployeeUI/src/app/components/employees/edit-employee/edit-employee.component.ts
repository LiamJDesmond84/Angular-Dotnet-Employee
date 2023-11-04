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

  employeeDetails: Employee = {
    id: "",
    name: "",
    email: "",
    phone: 0,
    salary: 0,
    department: ""
  }

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (params) => {
          // "id" from app-routing route
          const id = params.get("id");

          if(id) {
            // If ID exists - call API to GET employee
            this.employeeService.getEmployee(id)
            .subscribe({
              next: (response) => {
                this.employeeDetails = response;
              }
            });
          }
        },
        error: (response) => {
          console.log(response.error);
          
        }
      }
      
    )
  }

  

  public updateEmployee() {

    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails);
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
