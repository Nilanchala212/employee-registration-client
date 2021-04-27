import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details-data',
  templateUrl: './employee-details-data.component.html',
  styleUrls: ['./employee-details-data.component.css']
})
export class EmployeeDetailsDataComponent implements OnInit {

  id!: number
  employee!: Employee

  constructor(private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee;
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee= data;
    });
  }

}
