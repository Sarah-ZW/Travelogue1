import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ldata } from './linkInterface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
private dataLinkUrl = 'http://localhost:4200/newhampshire/link/'
  constructor(private http: HttpClient ) { }

  getData(): Observable<Ldata[]> {
    return this.http.get<Ldata[]>(this.dataLinkUrl);
  }
}
