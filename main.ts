class Person {
    name:string;
    age:number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;

    }
};

class Student extends Person {
    rollNumber: string;
    courses: Course[] = [];

    constructor (name: string, age: number, rollNumber: string) {
        super(name, age)
        this.rollNumber = rollNumber
    }

    registerForCourses(course: Course){
        this.courses.push(course);
    }

};

class Instructor extends Person {
  private  salary: number;
    courses: Course[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary;
    }
    assignCourse(course: Course) {
        this.courses.push(course);
    }
    get Salary(){
       return this.salary  
    }

};



class Course {
    id: number;
    name: string;
    students: Student[] = []
    instructors: Instructor[] = []

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name
    }
    addStudent (std: Student) {
        this.students.push(std)
    
    }

    setInstructor (instructor: Instructor) {
        this.instructors.push(instructor)

    }
};


class Department {
    name: string;
    courses: Course[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addCourse(course: Course) {
        this.courses.push(course)
    }
}

const std1 = new Student("Aqsa", 18, "1234");
const std2 = new Student ("Miral", 18, "1634");

const instructor1 = new Instructor("arham", 30, 10000)
const instructor2 = new Instructor("usama", 32, 50000)

const course1 = new Course (1, "Blockchain");
const course2 = new Course (2, "Metaverse");

course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);


course1.setInstructor(instructor1)
course2.setInstructor(instructor2)

console.log(course1.students);
console.log(std1.courses)

const d1 = new Department("Computer Science");

d1.addCourse(course1);

// console.log(d1.courses[0]);



