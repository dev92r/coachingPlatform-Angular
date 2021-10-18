import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coach } from '../shared/coach';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class CoachesService {

  constructor(private http: HttpClient) { }

  getCoaches():Observable<Coach[]>  {
    return this.http.get<Coach[]>(baseURL + 'coaches');
  }
}
