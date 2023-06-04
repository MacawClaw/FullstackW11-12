import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../services/Data-Types';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  addCourseMessage:string|undefined;
  constructor(private courseService: CourseService){
  }

  submit(data: Course){
    console.log(data);
    this.courseService.addCourse(data).subscribe((result) => {
      console.log(result);
      if(result){
        this.addCourseMessage="Course was added successfully";
      }
    });

    setTimeout(() => {
      this.addCourseMessage=undefined;
    }, 2000);
  }

}
