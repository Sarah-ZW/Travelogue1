import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idata } from './dataInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private apiUrl = 'http://localhost:4200/newhampshire/api/'
  constructor(private http: HttpClient ) { }

  getData(): Observable<Idata[]> {
    return this.http.get<Idata[]>(this.apiUrl);
  }
}
