import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  private api_url = 'https://jsonplaceholder.typicode.com/';

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, { params });
  }

}
