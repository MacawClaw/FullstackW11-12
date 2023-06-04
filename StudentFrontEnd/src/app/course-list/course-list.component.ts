import { Component, OnInit } from '@angular/core';
import { Course } from '../services/Data-Types';
import { CourseService } from '../services/course.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courseList: undefined | Course[];
  courseMessage:undefined|string;
  iconDelete=faTrash;
  iconEdit=faEdit;

  constructor(private courseService: CourseService){}

  ngOnInit(): void {
    this.list();
  }

  deleteCourse(courseId:number){
    this.courseService.deleteCourse(courseId).subscribe((result) => {
      if(result){
        this.courseMessage="Course Deleted";
        this.list();
      }
      console.warn(result);
      
    });
    setTimeout(() => {
      this.courseMessage=undefined;
    }, 2000);
  }

  list() {
    this.courseService.courseList().subscribe((result) => {
      
      if(result) {
        this.courseList=result;
      }
    })
  }

}
