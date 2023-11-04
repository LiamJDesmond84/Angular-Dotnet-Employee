import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {

    // Full path to getAllEmployees from backend(according to Swagger?)
    return this.http.get<Employee[]>(this.baseApiUrl + "/api/employees");
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    addEmployeeRequest.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Employee>(this.baseApiUrl + "/api/employees", addEmployeeRequest);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + "/api/employees/" + id);
  }

  editEmployee(editEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + "api/employees", editEmployeeRequest);
  }
}
