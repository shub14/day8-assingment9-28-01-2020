import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  enteredID = '';
  enteredNAME = '';
  enteredSALARY = '';
  enteredDEPARTMENT = '';
  constructor() { }
@Output() employeeCreated = new EventEmitter();
  addEmployee() {
    const employee = {
      ID: this.enteredID,
      NAME: this.enteredNAME,
      SALARY: this.enteredSALARY,
      DEPARTMENT: this.enteredDEPARTMENT
    };
    this.employeeCreated.emit(employee);
  }
  ngOnInit() {
  }

}
