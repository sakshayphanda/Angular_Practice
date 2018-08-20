import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course ={
    title:"hi this is sakshay",
    name : 'sak'
  }
  constructor() { }

  ngOnInit() {
  }

}
