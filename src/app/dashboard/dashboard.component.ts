import { EmpDetails } from './dashboard-module';

import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { __assign } from 'tslib';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';




const empdetails: EmpDetails[] = [
  { EmpId: 1, EmpName: "Mahesh", EmpMobile: 9704065712, EmpGender: "Male", Empmail: "mahesh970098@gmail.com", EmpSalary: 30000 },
  { EmpId: 2, EmpName: "mahi", EmpMobile: 9704065712, EmpGender: "Male", Empmail: "mahesh9704065@outlook.com", EmpSalary: 35000 },
  { EmpId: 3, EmpName: "venky", EmpMobile: 945421544, EmpGender: "Male", Empmail: "venky@gmail.com", EmpSalary: 15000 },
  { EmpId: 4, EmpName: "siri", EmpMobile: 85015174245, EmpGender: "Female", Empmail: "siri21@gmail.com", EmpSalary: 20000 },


];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {


  displayedColumns: string[] = ['actions', 'emplid', 'name', 'mobile', 'email', 'gender', 'salary'];
  dataSource = new MatTableDataSource(empdetails);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  empdetail: EmpDetails;

  empdet: EmpDetails;
  empdetails: any;
  constructor() {
    this.empdetail = new EmpDetails;

    this.empdet = new EmpDetails;

  }




  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  addmember(form: NgForm) {
    empdetails.push({ EmpId: this.empdetail.EmpId, EmpName: this.empdetail.EmpName, EmpMobile: this.empdetail.EmpMobile, EmpGender: this.empdetail.EmpGender, Empmail: this.empdetail.Empmail, EmpSalary: this.empdetail.EmpSalary })
    this.dataSource = new MatTableDataSource<any>(empdetails);

    console.log(this.empdetail);
    alert("Member Added");
    form.resetForm();

  }

  delete(row: any) {
    console.log(row);
    if (confirm("Do you want to delete")) {


      this.dataSource.data.splice(this.dataSource.data.indexOf(row.id));
      this.dataSource = new MatTableDataSource<any>(empdetails);

      alert("Record Deleted");
      console.log("deleted");
    }
  }



}


