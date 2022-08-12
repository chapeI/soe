import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  save(k: string, v: any) {
    localStorage.setItem(k, v)
  }

  get(k: string) : any {
    return localStorage.getItem(k)
  }

  clear() {
    localStorage.clear()
  }
}
