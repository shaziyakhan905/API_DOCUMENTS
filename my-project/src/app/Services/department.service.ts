import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  getDepartmentList():any[]{
    const deptList = [
      {
        id: 1,
        name: "Alice Johnson",
        status: "active",
        department: "Computer Science",
        registrationDate: new Date()
      },
      {
        id: 2,
        name: "Michael Smith",
        status: "inactive",
        department: "Mechanical Engineering",
        registrationDate: new Date()
      },
      {
        id: 3,
        name: "Sophia Lee",
        status: "active",
        department: "Business Administration",
        registrationDate: new Date()
      }
    ];
    return deptList
  }
}
