import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by-example',
  templateUrl: './track-by-example.component.html',
  styleUrls: ['./track-by-example.component.css'],
  preserveWhitespaces:true
})

export class TrackByExampleComponent implements OnInit {
  title:string="NgFor Example"
  employees: any = [];
  num:number=0;
  values:number[]=[1,2,3,4];
  constructor() {
    this.employees = [
      { EmpId: 101, EmpName: "Smith", EmpJob: "Programmer", EmpSalary: 18000, DeptName: "IT" },
      { EmpId: 102, EmpName: "David", EmpJob: "HR Manager", EmpSalary: 25000, DeptName: "HR" },
      { EmpId: 103, EmpName: "Peter", EmpJob: "Sales Manager", EmpSalary: 22000, DeptName: "Sales" },
      { EmpId: 104, EmpName: "Martin", EmpJob: "Marketing Manager", EmpSalary: 28000, DeptName: "Marketing" }
    ];

  }
  getEmployees():void{
    this.employees = [
      { EmpId: 101, EmpName: "Smith", EmpJob: "Programmer", EmpSalary: 18000, DeptName: "IT" },
      { EmpId: 103, EmpName: "Ankur", EmpJob: "Sales Manager", EmpSalary: 22000, DeptName: "Sales" },
      { EmpId: 104, EmpName: "Ankit", EmpJob: "Marketing Manager", EmpSalary: 28000, DeptName: "Marketing" },
      { EmpId: 105, EmpName: "Fleming", EmpJob: "Finance Manager", EmpSalary: 35000, DeptName: "Finance" },
      { EmpId: 106, EmpName: "Fleming", EmpJob: "Finance Manager", EmpSalary: 35000, DeptName: "Finance" }
      ];
  }

  trackByEmpCode(index: number, employee: any): number {
    return employee.EmpId;
    }

  ngOnInit(): void {
  }

}
