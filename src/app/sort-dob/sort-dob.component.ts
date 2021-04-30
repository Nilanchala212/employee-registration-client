import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-sort-dob',
  templateUrl: './sort-dob.component.html',
  styleUrls: ['./sort-dob.component.css']
})
export class SortDobComponent implements OnInit {
  employees!: Employee[];
  sortedColumn!: string;
  key: string='firstName';
  reverse: boolean= false;
  constructor(private  employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees=data;
    });
  }
  sortByDob(){
    this.router.navigate(['sort-dob'])
    
  }

}
