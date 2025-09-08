import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  errorMessage: string = "";
  studentId: string = "";// std001
  sumMarks: number = 0;
  averageMarks: number = 0;

  studentResult:any = {};
  students = [
    {
      id: "std001",
      name: "Alice Johnson",
      class: "10A",
      subjects: [
        { subjectName: "Math", marks: 85, totalMarks: 100 },
        { subjectName: "English", marks: 78, totalMarks: 100 },
        { subjectName: "Science", marks: 92, totalMarks: 100 },
        { subjectName: "History", marks: 88, totalMarks: 100 },
        { subjectName: "Computer", marks: 95, totalMarks: 100 }
      ]
    },
    {
      id: "std002",
      name: "Bob Smith",
      class: "10A",
      subjects: [
        { subjectName: "Math", marks: 90, totalMarks: 100 },
        { subjectName: "English", marks: 88, totalMarks: 100 },
        { subjectName: "Science", marks: 80, totalMarks: 100 },
        { subjectName: "History", marks: 85, totalMarks: 100 },
        { subjectName: "Computer", marks: 91, totalMarks: 100 }
      ]
    },
    {
      id: "std003",
      name: "Charlie Brown",
      class: "10B",
      subjects: [
        { subjectName: "Math", marks: 70, totalMarks: 100 },
        { subjectName: "English", marks: 75, totalMarks: 100 },
        { subjectName: "Science", marks: 65, totalMarks: 100 },
        { subjectName: "History", marks: 72, totalMarks: 100 },
        { subjectName: "Computer", marks: 68, totalMarks: 100 }
      ]
    },
    {
      id: "std004",
      name: "Diana Prince",
      class: "10B",
      subjects: [
        { subjectName: "Math", marks: 95, totalMarks: 100 },
        { subjectName: "English", marks: 82, totalMarks: 100 },
        { subjectName: "Science", marks: 89, totalMarks: 100 },
        { subjectName: "History", marks: 90, totalMarks: 100 },
        { subjectName: "Computer", marks: 93, totalMarks: 100 }
      ]
    },
    {
      id: "std005",
      name: "Ethan Hunt",
      class: "10C",
      subjects: [
        { subjectName: "Math", marks: 88, totalMarks: 100 },
        { subjectName: "English", marks: 84, totalMarks: 100 },
        { subjectName: "Science", marks: 86, totalMarks: 100 },
        { subjectName: "History", marks: 80, totalMarks: 100 },
        { subjectName: "Computer", marks: 87, totalMarks: 100 }
      ]
    }
  ];

  constructor() {

  }

  getStudentById() {
    console.log(this.studentId);
    const checkStudent: any = this.students.find((el: any) => {
      if (el.id == this.studentId) {
        return el
      }
    });
    if (checkStudent) {
      const stdSubjects = checkStudent.subjects;
      let stdTotalMarks: number = 0;
      for (let subject of stdSubjects) {
        stdTotalMarks += subject.marks
      }
      const averageMarks = stdTotalMarks / stdSubjects.length;
      this.studentResult = {
        data:{...checkStudent},
        totalMarks:stdTotalMarks,
        averageMarks:averageMarks,
        status:(averageMarks > 50) ? "passed":"failed"
      }
      console.log(this.studentResult)
      
    }else{
      console.log("please enter valid stdid")
    }


    // console.log(stdSubjects)
    // console.log(stdTotalMarks)
  }

}
