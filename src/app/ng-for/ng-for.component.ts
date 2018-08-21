import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent{
  courses=[
    {id:1,name:'MCA'},
    {id:2,name:'CA'},
    {id:3,name:'BCA'}
];
}
