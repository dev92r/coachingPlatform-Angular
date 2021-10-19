import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coach } from '../shared/coach';
import { baseURL } from '../shared/baseurl';
import { COACHES } from '../shared/coaches';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoachesService {

  constructor(private http: HttpClient) { }

  getCoaches():Observable<Coach[]>  {
    return of(COACHES).pipe(delay(2000));
  }
}
