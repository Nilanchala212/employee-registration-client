import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: Employee[], searchValue: string): Employee[] {
    if(!employees || !searchValue){
      return employees;
    }
      // return employees.filter(function(Search: { firstName: string | any[]; }){
      //   return Search.firstName.indexOf(searchValue) > -1;
      return employees.filter(employees =>
         employees.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
         employees.emailId.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
         employees.city.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
    
  }
