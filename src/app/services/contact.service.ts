import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../shared/contact';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  postContactInput(contactInput: Contact): Observable<Contact> {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Contact>(baseURL + 'contact', contactInput, httpOptions)
  }
}
