import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../services/Data-Types';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit{
  courseData: undefined | Course;
  courseMessage: undefined | string;

  constructor(private route: ActivatedRoute, private courseService:CourseService){}

  ngOnInit(): void {
    let courseId = this.route.snapshot.paramMap.get('id');
    console.log(courseId);
    courseId && this.courseService.getCourse(courseId).subscribe((data) => {
      console.warn(data);
      this.courseData=data;
    })
  }

  submit(data:any) {
    
    if (this.courseData) {
      data.courseId=this.courseData.courseId;
    }
    this.courseService.updateCourse(data).subscribe((result) => {
      if (result) {
        this.courseMessage="Course Updated";
      }
    });

    setTimeout(() => {
      this.courseMessage=undefined;
    }, 2000);
  }

}
