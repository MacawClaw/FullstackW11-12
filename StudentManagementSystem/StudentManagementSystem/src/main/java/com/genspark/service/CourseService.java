package com.genspark.service;

import com.genspark.entity.Course;
import com.genspark.entity.User;

import java.util.List;

public interface CourseService {

    String addCourse(Course course);
    List<Course> getAllCourses();
    Course updateCourse(Course course);
    String deleteCourse(int courseId);

    List<Course> getCoursesByStudentId(int studentId);

    List<User> getStudentsByCourseId(int courseId);

    String deleteCourseStudent(int courseId, int studentId);

    String deleteUser(int userId);

    String addCourseAndStudent(int courseId, int studentId);
}
