import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  saveData(k: string, v: any) {
    localStorage.setItem(k, v);
  }

  getData(k: string) : any {
    return localStorage.getItem(k) 
  }

  persistTest(data: any) {
    let json = JSON.stringify(data)
    this.saveData('me', json)

    var x = this.getData('me')
    console.log(JSON.parse(x))
  }
}
