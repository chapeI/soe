import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public saveData(k: string, v: string) {
    localStorage.setItem(k, v);
  }

  public getData(k: string) {
    return localStorage.getItem(k)
  }
}
