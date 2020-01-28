import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-post',
  templateUrl: './employee-post.component.html',
  styleUrls: ['./employee-post.component.css']
})
export class EmployeePostComponent implements OnInit {

  constructor() { }

  @Input() employees = [];
  ngOnInit() {
  }

}
