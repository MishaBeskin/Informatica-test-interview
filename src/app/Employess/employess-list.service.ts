import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './employess-list/Employee.Model';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployessListService {

  constructor(private http: HttpClient) { }


  get employess() {
    return this.http
      .get<Employee>(
        'http://localhost:5000/api/employees'
      )
      .pipe(
        map(resData => {
          const employess = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              employess.push(
                new Employee(
                  key,
                  resData[key].name,
                  resData[key].animal,
                  resData[key].color,
                ));
            }
          }
          return employess;
        })

      );
  }


  getEmployee(id: string) {
    return this.http
      .get<Employee>(
        `http://localhost:5000/api/employees/${id}`
      )
      .pipe(
        map(employee => {
          return new Employee(
            id,
            employee.name,
            employee.animal,
            employee.color,
          );
        })
      );
  }


}
