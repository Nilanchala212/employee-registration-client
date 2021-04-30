import { PropertyRead } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee} from '../employee'
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  searchValue!: string;
  isDesc:boolean = false;
  showData: any;

  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees=data;
    });
  }
  employeeDetailsData(id: number){
    this.router.navigate(['employee-details-data', id]);
  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployees();
    })
  }
  
  sortName(property: string | number){
    this.isDesc = ! this.isDesc;
    let direction=this.isDesc ? 1: -1
    this.showData.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(a[property] < b[property]){
        return -1 * direction;
      }
      else if (a[property] > b[property ]){
        return 1 * direction; 
      }else{
        return 0;
      }
    });
  }
  
}
