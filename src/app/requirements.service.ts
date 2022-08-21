import { Injectable } from '@angular/core';

class Course {
  name
  requirement
  constructor(name: string, category:string) {
    this.name = name
    this.requirement = category
  }
}

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  courses: Course[] = [
    {'name': 'data structures', 'requirement': 'core'},
    {'name': 'operating systems', 'requirement': 'core'},
    {'name': 'calculus', 'requirement': 'math'},
  ]


  constructor() { }

  getRequirements() {
    return this.courses;
  }

  getSortedRequirements() {
    let o: any = {}
    this.courses.map(course => {  // clever way of sorting
      o[course.requirement] = o[course.requirement] || [] // undefined ? [] : [lstSoFar]   // value undefined only on seeing a category for the first time
      o[course.requirement] = [...o[course.requirement], course]   // unwrap [], append course
    })
    return o
  }

}
