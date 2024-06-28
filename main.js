"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
;
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
    get Salary() {
        return this.salary;
    }
}
;
class Course {
    constructor(id, name) {
        this.students = [];
        this.instructors = [];
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
    }
    setInstructor(instructor) {
        this.instructors.push(instructor);
    }
}
;
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const std1 = new Student("Aqsa", 18, "1234");
const std2 = new Student("Miral", 18, "1634");
const instructor1 = new Instructor("arham", 30, 10000);
const instructor2 = new Instructor("usama", 32, 50000);
const course1 = new Course(1, "Blockchain");
const course2 = new Course(2, "Metaverse");
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
console.log(course1.students);
console.log(std1.courses);
const d1 = new Department("Computer Science");
d1.addCourse(course1);
// console.log(d1.courses[0]);
