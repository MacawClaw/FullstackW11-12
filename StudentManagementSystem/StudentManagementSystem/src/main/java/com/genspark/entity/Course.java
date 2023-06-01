package com.genspark.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="course_id", length = 45)
    private int courseId;
    private String name;
    private String description;
    @Column(name="max_students")
    private int maxNumberOfStudents;

    @Override
    public String toString() {
        return "Course{" +
                "courseId=" + courseId +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", maxNumberOfStudents=" + maxNumberOfStudents +
                '}';
    }
}
