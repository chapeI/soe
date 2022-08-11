import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  saveData(k: string, v: any) {
    localStorage.setItem(k, v)
  }

  getData(k: string) : any {
    return localStorage.getItem(k) 
  }

  clear() {
    localStorage.clear()
  }
}
