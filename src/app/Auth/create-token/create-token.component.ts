import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.css']
})
export class CreateTokenComponent implements OnInit {

  
  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
  }

  getToken() {
    this.employeeService
    .getToken().subscribe(data => localStorage.setItem("auth-token",data));
      
      this.router.navigate(['/employees']);
  }

  
}
