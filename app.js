class Group {
  students = [];

  addStudent(student) {
    this.students.push(student);
  }
  getAverageMark() {
    const groupAverageMarks = this.students.reduce((a1, s) => {
      const studentAverageMarks = s.marks.reduce((a2, m) => {
        return a2 + m / s.marks.length;
      }, 0);
      return a1 + studentAverageMarks / this.students.length;
    }, 0);
    return groupAverageMarks;
  }
}

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}

const feGroup = new Group();
const firstStudent = new Student("John Doe", [10, 102, 0]);

feGroup.addStudent(new Student("John Doe", [10, 10, 5, 10]));
feGroup.addStudent(new Student("Alex Smith", [10, 9, 8]));
feGroup.addStudent(new Student("Bob Johnson", [9, 10, 10, 8]));

console.log(feGroup.students); // [{},{},{}]
console.log(feGroup.getAverageMark()); // 20
