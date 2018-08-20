import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course ={
    title:"hi this is sakshay",
    price : 2.543,
    date : new Date(2018,2,8)
  }


  onSave($event)
  {
    console.log("Button is clicked",$event);
  }
  isActive=true;


  srcTitle ="http://lorempixel.com/400/200/sports/Dummy-Text" //{{}} this is an example of using property binding 
  constructor() { }

  ngOnInit() {
  }

}
