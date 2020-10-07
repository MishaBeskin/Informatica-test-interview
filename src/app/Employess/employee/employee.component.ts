import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployessListService } from '../employess-list.service';
import { Employee } from '../employess-list/Employee.Model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  loadedEmployee: Employee;
  employeeSub: Subscription;
  constructor(private employeesService: EmployessListService) { }

  ngOnInit(): void {
  }


  getEmployee(id: string) {
    this.employeeSub = this.employeesService.getEmployee(id).subscribe(employee => {
      this.loadedEmployee = employee;
    });
  }


}
