import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RequirementsService {
  cs: any

  constructor(private http: HttpClient) {
    http.get('assets/cs.json').subscribe(x => {
      this.cs = x
    })
  }

  getCS () {
    return this.cs
  }
}
