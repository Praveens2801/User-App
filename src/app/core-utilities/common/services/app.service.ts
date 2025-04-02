import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AppService {


  constructor(private http: HttpClient) {}

  getUsers(page: number, limit: number): Observable<any> {
    return this.http.get<any>(`${environment.userDataApiUrl}?page=${page}&limit=${limit}`);
  }

}
