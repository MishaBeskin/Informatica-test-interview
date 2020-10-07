import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployessListService } from '../employess-list.service';
import { Employee } from './Employee.Model';

@Component({
  selector: 'app-employess-list',
  templateUrl: './employess-list.component.html',
  styleUrls: ['./employess-list.component.scss']
})
export class EmployessListComponent implements OnInit, OnDestroy {

  loadedEmployees: Employee[];
  private employeesSub: Subscription;
  constructor(private employeesService: EmployessListService) { }

  ngOnInit() {
    this.employeesSub = this.employeesService.employess.subscribe(employees => {
      this.loadedEmployees = employees;
    });
  }

  ngOnDestroy() {
    if (this.employeesSub) {
      this.employeesSub.unsubscribe();
    }
  }

}
