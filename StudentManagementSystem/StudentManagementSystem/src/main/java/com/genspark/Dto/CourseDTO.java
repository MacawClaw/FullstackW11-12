package com.genspark.Dto;

public class CourseDTO {

    private int courseId;

    private String name;

    private String description;

    private int maxNumberOfStudents;

    private int teacherId;

    public CourseDTO() {
    }

    public CourseDTO(int courseId, String name, String description, int maxNumberOfStudents, int teacherId) {
        this.courseId = courseId;
        this.name = name;
        this.description = description;
        this.maxNumberOfStudents = maxNumberOfStudents;
        this.teacherId = teacherId;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getMaxNumberOfStudents() {
        return maxNumberOfStudents;
    }

    public void setMaxNumberOfStudents(int maxNumberOfStudents) {
        this.maxNumberOfStudents = maxNumberOfStudents;
    }

    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    @Override
    public String toString() {
        return "CourseDTO{" +
                "courseId=" + courseId +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", maxNumberOfStudents='" + maxNumberOfStudents + '\'' +
                ", teacherId=" + teacherId +
                '}';
    }
}
