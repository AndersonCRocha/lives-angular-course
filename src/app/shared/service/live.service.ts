import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiBaseUri = 'http://localhost:8080/lives'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLivesByFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(`${this.apiBaseUri}?flag=${flag}`)
  }
}
