import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee!: Employee;
  submitted = false;

  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.newEmployee();
  }

  newEmployee(): void {
    this.employee = new Employee();
    this.submitted = false;
  }

  save() {
    this.employeeService
    .createEmployee(this.employee).subscribe(data => 
      this.gotoList()) 
  }

  onSubmit() {
    console.log('employee');
    console.log(this.employee);

    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/employees']);
  }

}
