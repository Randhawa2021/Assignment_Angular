import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'https://localhost:44330/api/employee';
  private baseUrlAuth = 'https://localhost:44330/api/token';
  private token = "Bearer " + localStorage.getItem("auth-token");

   headers= new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set("Authorization",this.token);
  
  

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`,{'headers': this.headers });
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, JSON.stringify(employee),{'headers': this.headers });
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, JSON.stringify(value),{'headers': this.headers });
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {'headers': this.headers });
  }

  getEmployeesList(): Observable<Employee[]> {
    console.log('token '+this.token);
    return this.http.get<Employee[]>(`${this.baseUrl}`,{'headers': this.headers });
  }

  getToken(): Observable<any> {
    return this.http.get(`${this.baseUrlAuth}`,{responseType:'text'});
  }

}
