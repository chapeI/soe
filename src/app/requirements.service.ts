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
    {'name': 'ethics', 'requirement': 'english' },
    {'name': 'anthropology', 'requirement': 'general' },
    {'name': 'philosophy', 'requirement': 'general' },
  ]

  constructor() { }

  getRequirements() {
    return this.courses;
  }

  getSortedRequirements() {
    let o: any = {}
    this.courses.map(c => {
      o[c.requirement] = o[c.requirement] || []     // undefined ? [] : [lstSoFar]   // value undefined only on seeing a category for the first time
      o[c.requirement] = [...o[c.requirement], c]   // unwrap [], append course
    })
    return o
  }

}
