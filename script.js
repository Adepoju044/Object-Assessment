'use strict';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduction() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
class Student extends Person {
  constructor(name, age, subject, hisClass) {
    super(name, age);
    this.subject = subject;
    this.hisClass = hisClass;
  }

  study() {
    console.log(
      `${this.name} is studying ${this.subject} in ${this.hisClass} class.`
    );
  }
}
class Teacher extends Person {
  constructor(name, age, subject, yearsOfExperience) {
    super(name, age);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  teach() {
    console.log(
      `${this.name} is teaching ${this.subject} with ${this.yearsOfExperience} years of experience.`
    );
  }
}
const person = new Person("Farouk", 29);
person.introduction();

const student = new Student("fathia", 23, "Biology", "SS3");
student.introduction();
student.study();

const teacher = new Teacher("Mr. seun", 35, "Mathematics", 10);
teacher.introduction();
teacher.teach();