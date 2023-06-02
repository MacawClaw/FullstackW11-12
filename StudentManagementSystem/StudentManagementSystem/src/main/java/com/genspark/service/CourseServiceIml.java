package com.genspark.service;

import com.genspark.Dto.CourseDTO;
import com.genspark.entity.Course;
import com.genspark.entity.User;
import com.genspark.repository.CourseRepo;
import com.genspark.repository.UserRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CourseServiceIml implements CourseService {

    @Autowired
    private CourseRepo courseRepo;

    @Autowired
    private UserRepo userRepo;
    @Override
    public String addCourse(CourseDTO courseDTO) {
        Course course = new Course(
                courseDTO.getCourseId(),
                courseDTO.getName(),
                courseDTO.getDescription(),
                courseDTO.getMaxNumberOfStudents(),
                new User(courseDTO.getTeacherId())
        );

        courseRepo.save(course);
        return courseDTO.getName();
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRepo.findAll();
    }

    @Override
    public Course updateCourse(CourseDTO courseDTO) {
        Course course = new Course(
                courseDTO.getCourseId(),
                courseDTO.getName(),
                courseDTO.getDescription(),
                courseDTO.getMaxNumberOfStudents(),
                new User(courseDTO.getTeacherId())
        );

        return courseRepo.save(course);
    }

    @Override
    public String deleteCourse(int courseId) {
        courseRepo.deleteById(courseId);
        return "The course was deleted";
    }

    @Override
    public List<Course> getCoursesByStudentId(int studentId) {
        return courseRepo.findByStudentId(studentId);
    }

    @Override
    public List<User> getStudentsByCourseId(int courseId) {
        return userRepo.findByCourseId(courseId);
    }

    @Override
    public String deleteCourseStudent(int courseId, int studentId) {
        courseRepo.deleteCourseAndStudentById(courseId,studentId);
        return "The course was deleted";
    }

    @Override
    public String deleteUser(int userId) {
        userRepo.deleteById(userId);
        return "user deleted";
    }

    @Override
    public String addCourseAndStudent(int courseId, int studentId) {
        courseRepo.saveCourseAndStudent(courseId, studentId);
        return "saved";
    }
}
