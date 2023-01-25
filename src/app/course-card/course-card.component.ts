import { Component, Input } from '@angular/core';
import { COURSES } from '../src/db-data.ts';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})


export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;




  constructor() {}
  ngOnInit() {}

}
