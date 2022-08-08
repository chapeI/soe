import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NamesService {

  private _url:string = "assets/data/names.json"

  constructor(private http: HttpClient) { }

  getNames(): Observable<string[]> {
    return this.http.get<string[]>(this._url)
  }
}
